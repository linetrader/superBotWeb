// src/server/botRuntimeService.ts
import { BotStatus } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

// 러닝이라고 간주할 수 있는 heartbeat 유효 기간(초)
// WorkerManager 가 tick_sec=5s 기준으로 heartbeat를 계속 밀어넣는 구조라서
// 3배 정도의 여유를 준다.
const STALE_SECONDS = 15;

// ---- debug helpers ----
const RUNTIME_DEBUG: boolean = (() => {
  const v = process.env.BOT_RUNTIME_DEBUG;
  if (!v) return false;
  const s = v.trim().toLowerCase();
  return s === "1" || s === "true" || s === "yes" || s === "y" || s === "on";
})();

function dbg(label: string, fields: Record<string, unknown>): void {
  if (!RUNTIME_DEBUG) return;
  const ts = new Date().toISOString();
  try {
    // 문자열화 실패 대비 이중 시도
    console.log(`[bot-runtime] ${label} ${ts} ${JSON.stringify(fields)}`);
  } catch {
    console.log(`[bot-runtime] ${label} ${ts}`, fields);
  }
}

function isHeartbeatFresh(
  lastHeartbeat: Date | null | undefined,
  staleSeconds: number
): boolean {
  if (!lastHeartbeat) {
    return false;
  }
  const nowMs = Date.now();
  const hbMs = lastHeartbeat.getTime();
  const diffMs = nowMs - hbMs;

  // diffSec <= staleSeconds 면 아직 살아있는 것으로 본다.
  const diffSec = diffMs / 1000;
  return diffSec <= staleSeconds;
}

/**
 * 현재 BotRuntime 상태만 읽어온다.
 * 런타임 row 가 없으면 null.
 */
export async function getBotRuntimeStatus(
  botId: string
): Promise<BotStatus | null> {
  const row = await prisma.botRuntime.findUnique({
    where: { botId },
    select: { status: true },
  });
  const status: BotStatus | null = row?.status ?? null;
  dbg("STATUS_READ", { botId, status });
  return status;
}

/**
 * 현재 실행 중(RUNNING + 유효 heartbeat + workerId 존재)인지 판별한다.
 * - row 없음: false
 * - status != RUNNING: false
 * - workerId 없음: false
 * - heartbeat stale: false
 * - 그 외: true
 */
export async function isBotCurrentlyRunning(botId: string): Promise<boolean> {
  const runtimeRow = await prisma.botRuntime.findUnique({
    where: { botId },
    select: {
      status: true,
      workerId: true,
      lastHeartbeat: true,
    },
  });

  if (!runtimeRow) {
    dbg("RUNNING_CHECK", { botId, running: false, reason: "NO_ROW" });
    return false;
  }

  if (runtimeRow.status !== BotStatus.RUNNING) {
    dbg("RUNNING_CHECK", {
      botId,
      running: false,
      reason: "STATUS_NOT_RUNNING",
      status: runtimeRow.status,
    });
    return false;
  }

  if (!runtimeRow.workerId) {
    dbg("RUNNING_CHECK", {
      botId,
      running: false,
      reason: "NO_WORKER",
    });
    return false;
  }

  if (!isHeartbeatFresh(runtimeRow.lastHeartbeat, STALE_SECONDS)) {
    dbg("RUNNING_CHECK", {
      botId,
      running: false,
      reason: "STALE_HEARTBEAT",
      lastHeartbeat: runtimeRow.lastHeartbeat?.toISOString() ?? null,
      staleSeconds: STALE_SECONDS,
    });
    return false;
  }

  dbg("RUNNING_CHECK", { botId, running: true });
  return true;
}

/**
 * START 큐잉 허용 여부를 판단한다.
 * 정책: 상태가 정확히 STOPPED 이거나, 런타임 row 자체가 없을 때만 허용.
 * 그 외 상태(STARTING/RUNNING/STOPPING/ERROR)는 모두 금지.
 * 라우터 단계에서 선제 차단 용도로 사용.
 */
export async function isStartQueuingAllowed(botId: string): Promise<{
  allowed: boolean;
  status: BotStatus | null;
  reason: string | null;
}> {
  const status = await getBotRuntimeStatus(botId);

  if (status === null) {
    // 최초 실행 전 등: 허용
    dbg("START_ALLOWED", { botId, status: null, reason: "NO_ROW" });
    return { allowed: true, status: null, reason: null };
  }

  if (status === BotStatus.STOPPED) {
    dbg("START_ALLOWED", { botId, status, reason: null });
    return { allowed: true, status, reason: null };
  }

  // STOPPED 가 아니면 큐잉 금지
  dbg("START_BLOCKED", { botId, status, reason: "NOT_STOPPED" });
  return { allowed: false, status, reason: "NOT_STOPPED" };
}
