// src/app/(site)/shared/hooks/useBotStatusWatcher.ts
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { BotRow, BotStatus } from "@/types/bot-config";

type PendingAction = "start" | "stop" | null;

type UseBotStatusWatcherArgs = {
  startBot: (id: string) => Promise<void> | void;
  stopBot: (id: string) => Promise<void> | void;
  loadBots: () => Promise<void>;
  getBotsSnapshot: () => BotRow[];
  getBotById?: (id: string) => Promise<BotRow | null>;
};

type WaitResult =
  | { ok: true }
  | { ok: false; reason: "timeout" | "cancelled" | "not_found" | "unknown" };

const POLL_INTERVAL_MS = 600;
// ⬇︎ 여유를 넉넉히 주세요 (워커 부하/거래소 응답 지연 고려)
const TIMEOUT_MS_START = 45_000; // ← 15s → 45s
const TIMEOUT_MS_STOP = 45_000;

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ✅ RAW 상태를 그대로 반영
type Raw = "STOPPED" | "STARTING" | "RUNNING" | "STOPPING" | "ERROR";
function uiFromRow(b: BotRow): BotStatus | Raw {
  const raw = (b as { statusRaw?: Raw }).statusRaw;
  if (raw) return raw; // RUNNING/STOPPED/STARTING/STOPPING/ERROR 그대로
  return b.status ?? "UNKNOWN";
}

export function useBotStatusWatcher(args: UseBotStatusWatcherArgs) {
  const { startBot, stopBot, loadBots, getBotsSnapshot, getBotById } = args;

  const [pendingId, setPendingId] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);

  const lockRef = useRef<boolean>(false);
  const cancelledRef = useRef<boolean>(false);
  const unmountedRef = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      unmountedRef.current = true;
      // 언마운트=취소로 보지 않습니다.
    };
  }, []);

  const fetchOne = useCallback(
    async (id: string): Promise<BotRow | null> => {
      if (getBotById) {
        try {
          const one = await getBotById(id);
          if (one) return one;
        } catch {
          /* ignore and fallback */
        }
      }
      try {
        await loadBots();
      } catch {
        /* ignore */
      }
      const bots = getBotsSnapshot();
      return bots.find((b) => b.id === id) ?? null;
    },
    [getBotById, getBotsSnapshot, loadBots]
  );

  // ✅ 목표 상태에 대한 "도달" 판정 함수를 도입
  function reachedTarget(target: BotStatus, current: BotStatus | Raw): boolean {
    if (target === "RUNNING") {
      // RUNNING까지 가는 과정의 STARTING도 성공으로 인정
      return current === "RUNNING" || current === "STARTING";
    }
    if (target === "STOPPED") {
      // STOPPING → STOPPED 과도기 허용
      return current === "STOPPED" || current === "STOPPING";
    }
    return false;
  }

  const pollUntil = useCallback(
    async (
      id: string,
      target: BotStatus,
      timeoutMs = TIMEOUT_MS_START,
      intervalMs = POLL_INTERVAL_MS
    ): Promise<WaitResult> => {
      const startedAt = Date.now();

      // 첫 샷
      let bot = await fetchOne(id);
      if (!bot) return { ok: false, reason: "not_found" };
      if (reachedTarget(target, uiFromRow(bot))) return { ok: true };

      while (true) {
        if (cancelledRef.current) return { ok: false, reason: "cancelled" };
        if (Date.now() - startedAt >= timeoutMs)
          return { ok: false, reason: "timeout" };

        await sleep(intervalMs);
        if (unmountedRef.current) return { ok: false, reason: "unknown" };

        bot = await fetchOne(id);
        if (!bot) return { ok: false, reason: "not_found" };
        if (reachedTarget(target, uiFromRow(bot))) return { ok: true };
      }
    },
    [fetchOne]
  );

  const startAndWait = useCallback(
    async (id: string): Promise<WaitResult> => {
      if (lockRef.current) return { ok: false, reason: "unknown" };
      lockRef.current = true;
      cancelledRef.current = false;
      setPendingId(id);
      setPendingAction("start");

      try {
        await Promise.resolve(startBot(id));
      } catch {
        setPendingId(null);
        setPendingAction(null);
        lockRef.current = false;
        return { ok: false, reason: "unknown" };
      }

      const res = await pollUntil(
        id,
        "RUNNING",
        TIMEOUT_MS_START,
        POLL_INTERVAL_MS
      );

      try {
        await loadBots();
      } catch {
        /* ignore */
      }

      setPendingId(null);
      setPendingAction(null);
      lockRef.current = false;
      return res;
    },
    [pollUntil, startBot, loadBots]
  );

  const stopAndWait = useCallback(
    async (id: string): Promise<WaitResult> => {
      if (lockRef.current) return { ok: false, reason: "unknown" };
      lockRef.current = true;
      cancelledRef.current = false;
      setPendingId(id);
      setPendingAction("stop");

      try {
        await Promise.resolve(stopBot(id));
      } catch {
        setPendingId(null);
        setPendingAction(null);
        lockRef.current = false;
        return { ok: false, reason: "unknown" };
      }

      const res = await pollUntil(
        id,
        "STOPPED",
        TIMEOUT_MS_STOP,
        POLL_INTERVAL_MS
      );

      try {
        await loadBots();
      } catch {
        /* ignore */
      }

      setPendingId(null);
      setPendingAction(null);
      lockRef.current = false;
      return res;
    },
    [pollUntil, stopBot, loadBots]
  );

  const cancel = useCallback(() => {
    cancelledRef.current = true;
  }, []);

  return { pendingId, pendingAction, startAndWait, stopAndWait, cancel };
}
