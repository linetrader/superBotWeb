// src/server/botControlService.ts
import prisma from "@/lib/prisma";
import { enqueueWorkItem } from "@/server/enqueueWorkItem";
import { WorkType, BotStatus } from "@/generated/prisma";

/** enqueueWorkItem()이 실제로 생성해서 돌려주는 작업 아이템 타입 */
type EnqueueResult = Awaited<ReturnType<typeof enqueueWorkItem>>;

/** controlBots()에서 봇별 결과 shape */
interface ControlBotResult {
  botId: string;
  ok: boolean;
  reason?: string;
  workItem?: EnqueueResult;
}

/** controlBots() 전체 리턴 shape */
interface ControlBotsReturn {
  updated: number;
  requested: number;
  eligible: number;
  results: ControlBotResult[];
}

/** 런타임 상태 정규화 (null -> STOPPED 취급) */
function normalizeRuntimeStatus(s: string | null | undefined): BotStatus {
  return (s ?? "STOPPED") as BotStatus;
}

/** adminId 기준으로 모든 하위(레퍼럴 트리 전체)의 userId 수집 */
async function collectAllDownlineIds(rootUserId: string): Promise<Set<string>> {
  const visited = new Set<string>();
  let frontier: string[] = [rootUserId];
  const MAX_DEPTH = 20;
  const TAKE_PER_ROUND = 5000;

  for (let depth = 0; depth < MAX_DEPTH && frontier.length > 0; depth++) {
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

export async function controlBots(params: {
  requesterId: string;
  action: "START" | "STOP";
  botIds: string[];
}): Promise<ControlBotsReturn> {
  const { requesterId, action, botIds } = params;

  // requesterId 기준으로 제어 가능한 userId = 본인 + 다운라인 전체
  const downlineSet = await collectAllDownlineIds(requesterId);
  const allowedUserIdsSet = new Set<string>([requesterId, ...downlineSet]);

  // 대상 봇 정보 + 현재 runtime.status 조회
  const bots = await prisma.tradingBot.findMany({
    where: { id: { in: botIds } },
    select: {
      id: true,
      userId: true,
      BotRuntime: {
        select: {
          status: true,
        },
      },
    },
  });

  // 권한 있는 봇만 추림
  const authorized = bots.filter((b) => allowedUserIdsSet.has(b.userId));

  // 상태별 허용 조건
  const START_ALLOWED = new Set<BotStatus>(["STOPPED", "STOPPING", "ERROR"]);
  const STOP_ALLOWED = new Set<BotStatus>(["STARTING", "RUNNING", "ERROR"]);

  // 상태적으로도 가능한 봇만 추림 (eligible)
  const eligibleBots = authorized.filter((b) => {
    const curStatus = normalizeRuntimeStatus(b.BotRuntime?.status);
    return action === "START"
      ? START_ALLOWED.has(curStatus)
      : STOP_ALLOWED.has(curStatus);
  });

  const results: ControlBotResult[] = [];
  let successCount = 0;

  // eligible 한 애들만 실제 큐 enqueue 시도
  for (const b of eligibleBots) {
    const workType =
      action === "START" ? WorkType.START_BOT : WorkType.STOP_BOT;
    try {
      const workItem = await enqueueWorkItem({
        userId: b.userId, // 실제 그 봇의 주인
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

  // authorized인데 eligible이 아니었던 애들도 결과에 추가
  for (const b of authorized) {
    const isAlreadyIncluded = eligibleBots.find((eb) => eb.id === b.id);
    if (isAlreadyIncluded) continue;

    results.push({
      botId: b.id,
      ok: false,
      reason: "NOT_ELIGIBLE_STATE",
    });
  }

  // 아예 권한조차 없는 / 존재하지 않는 bot들도 결과에 추가
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
