// src/server/botRuntimeService.ts
import { BotStatus } from "@/generated/prisma";
import { prisma } from "@/lib/prisma"; // <- 실제 prisma client import 경로로 바꿔야 한다
//import { BotStatus } from "@prisma/client"; // enum BotStatus 가 Prisma에서 생성된다고 가정

// 러닝이라고 간주할 수 있는 heartbeat 유효 기간(초)
// WorkerManager 가 tick_sec=5s 기준으로 heartbeat를 계속 밀어넣는 구조라서
// 3배 정도의 여유를 준다.
const STALE_SECONDS = 15;

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

export async function isBotCurrentlyRunning(botId: string): Promise<boolean> {
  // botId는 BotRuntime@@unique([botId]) 라서 findUnique(where:{botId}) 가능
  const runtimeRow = await prisma.botRuntime.findUnique({
    where: { botId: botId },
    select: {
      status: true,
      workerId: true,
      lastHeartbeat: true,
    },
  });

  // 런타임 row 자체가 없으면 돌고 있다고 볼 수 없음
  if (!runtimeRow) {
    return false;
  }

  // status 가 RUNNING 이 아니면 실행중 아님
  if (runtimeRow.status !== BotStatus.RUNNING) {
    return false;
  }

  // workerId 가 없으면 누가 점유하고 있는지 불명 → 안전하게 "안 돌고 있음"으로 처리 (재시작 허용)
  if (!runtimeRow.workerId) {
    return false;
  }

  // heartbeat 가 STALE 이면 죽은 runner 로 간주 → false
  if (!isHeartbeatFresh(runtimeRow.lastHeartbeat, STALE_SECONDS)) {
    return false;
  }

  // 여기까지 왔으면 "현재 살아있는 워커가 이 봇을 소유하고 있다"로 본다
  return true;
}
