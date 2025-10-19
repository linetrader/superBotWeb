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
  /** 단건 조회를 우선 사용 (없으면 전체 로딩 fallback) */
  getBotById?: (id: string) => Promise<BotRow | null>;
};

type WaitResult =
  | { ok: true }
  | { ok: false; reason: "timeout" | "cancelled" | "not_found" | "unknown" };

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

function uiFromRow(b: BotRow): BotStatus {
  const raw = (
    b as {
      statusRaw?: "STOPPED" | "STARTING" | "RUNNING" | "STOPPING" | "ERROR";
    }
  ).statusRaw;
  if (raw === "RUNNING") return "RUNNING";
  if (raw === "STOPPED") return "STOPPED";
  if (raw === "STARTING" || raw === "STOPPING" || raw === "ERROR")
    return "UNKNOWN";
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
      cancelledRef.current = true;
    };
  }, []);

  const fetchOne = useCallback(
    async (id: string): Promise<BotRow | null> => {
      if (getBotById) {
        const one = await getBotById(id);
        if (one) return one;
      }
      // fallback: 전체 로딩 후 스냅샷에서 찾기
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

  const pollUntil = useCallback(
    async (
      id: string,
      target: BotStatus,
      timeoutMs = 15_000,
      intervalMs = 600
    ): Promise<WaitResult> => {
      const startedAt = Date.now();

      // 첫 샷
      let bot = await fetchOne(id);
      if (!bot) return { ok: false, reason: "not_found" };
      if (uiFromRow(bot) === target) return { ok: true };

      while (!unmountedRef.current) {
        if (cancelledRef.current) return { ok: false, reason: "cancelled" };
        if (Date.now() - startedAt >= timeoutMs)
          return { ok: false, reason: "timeout" };

        await sleep(intervalMs);
        bot = await fetchOne(id);
        if (!bot) return { ok: false, reason: "not_found" };
        if (uiFromRow(bot) === target) return { ok: true };
      }
      return { ok: false, reason: "cancelled" };
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

      const res = await pollUntil(id, "RUNNING");
      // 최종 동기화 1회
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

      const res = await pollUntil(id, "STOPPED");
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
