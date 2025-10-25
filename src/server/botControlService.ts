// src/server/botControlService.ts
import prisma from "@/lib/prisma";
import { enqueueWorkItem } from "@/server/enqueueWorkItem";
import { WorkType, BotStatus } from "@/generated/prisma";

export type ControlBotsParams = {
  requesterId: string;
  action: "START" | "STOP";
  botIds: string[];
};

export type EnqueueResult = Awaited<ReturnType<typeof enqueueWorkItem>>;

export interface ControlBotResult {
  botId: string;
  ok: boolean;
  reason?: string;
  workItem?: EnqueueResult;
}

export interface ControlBotsReturn {
  updated: number;
  requested: number;
  eligible: number;
  results: ControlBotResult[];
}

/** 런타임 상태 정규화 (null -> STOPPED 취급) */
function normalizeRuntimeStatus(s: string | null | undefined): BotStatus {
  return (s ?? "STOPPED") as BotStatus;
}

/** adminId 기준 다운라인 전체(userId) 수집: referralEdge.parentId -> childId BFS */
export async function collectAllDownlineIds(
  rootUserId: string
): Promise<Set<string>> {
  const visited = new Set<string>();
  let frontier: string[] = [rootUserId];
  const MAX_DEPTH = 20;
  const TAKE_PER_ROUND = 5000;

  for (let depth = 0; depth < MAX_DEPTH && frontier.length > 0; depth += 1) {
    const edges = await prisma.referralEdge.findMany({
      where: { parentId: { in: frontier } },
      select: { childId: true },
      take: TAKE_PER_ROUND,
    });
    if (edges.length === 0) break;

    const next: string[] = [];
    for (const e of edges) {
      if (!visited.has(e.childId)) {
        visited.add(e.childId);
        next.push(e.childId);
      }
    }
    frontier = next;
  }

  return visited;
}

/** UI 표시에 쓰는 mode 문자열 변환 */
export function modeToString(mode: unknown): "SINGLE" | "MULTI" {
  return mode === "MULTI" ? "MULTI" : "SINGLE";
}

/** 런타임 status -> {status, running} 정규화 */
export function runtimeToFlags(rawStatus: string | null): {
  status: "STOPPED" | "STARTING" | "RUNNING" | "STOPPING" | "ERROR";
  running: boolean;
} {
  const s = (rawStatus ?? "STOPPED") as
    | "STOPPED"
    | "STARTING"
    | "RUNNING"
    | "STOPPING"
    | "ERROR";
  const running = s === "RUNNING" || s === "STARTING";
  return { status: s, running };
}

export async function controlBots(
  params: ControlBotsParams
): Promise<ControlBotsReturn> {
  const { requesterId, action, botIds } = params;

  const downlineSet = await collectAllDownlineIds(requesterId);
  const allowedUserIdsSet = new Set<string>([requesterId, ...downlineSet]);

  const bots = await prisma.tradingBot.findMany({
    where: { id: { in: botIds } },
    select: {
      id: true,
      userId: true,
      BotRuntime: { select: { status: true } },
    },
  });

  const authorized = bots.filter((b) => allowedUserIdsSet.has(b.userId));

  const START_ALLOWED = new Set<BotStatus>(["STOPPED", "STOPPING", "ERROR"]);
  const STOP_ALLOWED = new Set<BotStatus>(["STARTING", "RUNNING", "ERROR"]);

  const eligibleBots = authorized.filter((b) => {
    const curStatus = normalizeRuntimeStatus(b.BotRuntime?.status);
    return action === "START"
      ? START_ALLOWED.has(curStatus)
      : STOP_ALLOWED.has(curStatus);
  });

  const results: ControlBotResult[] = [];
  let successCount = 0;

  for (const b of eligibleBots) {
    const workType =
      action === "START" ? WorkType.START_BOT : WorkType.STOP_BOT;
    try {
      const workItem = await enqueueWorkItem({
        userId: b.userId,
        botId: b.id,
        type: workType,
        payload: {
          action: action === "START" ? "START_BOT" : "STOP_BOT",
          botId: b.id,
          requestedBy: requesterId,
        },
      });

      successCount += 1;
      results.push({
        botId: b.id,
        ok: true,
        workItem,
      });
    } catch (err) {
      results.push({
        botId: b.id,
        ok: false,
        reason: err instanceof Error ? err.message : "ENQUEUE_FAILED_UNKNOWN",
      });
    }
  }

  for (const b of authorized) {
    const already = eligibleBots.find((eb) => eb.id === b.id);
    if (already) continue;
    results.push({
      botId: b.id,
      ok: false,
      reason: "NOT_ELIGIBLE_STATE",
    });
  }

  for (const requestedId of botIds) {
    const alreadyReported = results.find((r) => r.botId === requestedId);
    if (alreadyReported) continue;

    results.push({
      botId: requestedId,
      ok: false,
      reason: "NOT_AUTHORIZED_OR_NOT_FOUND",
    });
  }

  return {
    updated: successCount,
    requested: botIds.length,
    eligible: eligibleBots.length,
    results,
  };
}
