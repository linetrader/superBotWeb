// src/app/api/admin/bots/list/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { getUserId } from "@/lib/request-user";
import type { BotStatus, WorkStatus, WorkType } from "@/generated/prisma";

// 목록 셀렉트
const listSelect = {
  id: true,
  userId: true,
  name: true,
  mode: true,
  BotRuntime: { select: { status: true } },
  user: { select: { username: true } }, // ← 추가
} as const;

const PatchPayloadSchema = z.object({
  action: z.union([z.literal("START"), z.literal("STOP")]),
  botIds: z.array(z.string().min(1)).min(1),
});

// BotMode(Prisma enum) → 문자열
function modeToString(mode: unknown): "SINGLE" | "MULTI" {
  return mode === "MULTI" ? "MULTI" : "SINGLE";
}

// 런타임 상태 → 러닝 여부 플래그
function runtimeToFlags(status: string | null): {
  status: "STOPPED" | "STARTING" | "RUNNING" | "STOPPING" | "ERROR";
  running: boolean;
} {
  const s = (status ?? "STOPPED") as
    | "STOPPED"
    | "STARTING"
    | "RUNNING"
    | "STOPPING"
    | "ERROR";
  const running = s === "RUNNING" || s === "STARTING";
  return { status: s, running };
}

// null 런타임은 STOPPED로 간주
function normalizeRuntimeStatus(s: string | null): BotStatus {
  return (s ?? "STOPPED") as BotStatus;
}

// GET: 관리자 본인 + 산하(downline) 봇 목록
export async function GET() {
  const adminId = await getUserId();
  if (!adminId) {
    return NextResponse.json(
      { ok: false, error: "UNAUTHORIZED" },
      { status: 401 }
    );
  }

  // 직속 산하 조회
  const edges = await prisma.referralEdge.findMany({
    where: { parentId: adminId },
    select: { childId: true },
    take: 5_000,
  });
  const downlineIds = edges.map((e) => e.childId);

  // 본인 포함
  const allowedIdsSet = new Set<string>([adminId, ...downlineIds]);
  const allowedIds = Array.from(allowedIdsSet);

  const bots = await prisma.tradingBot.findMany({
    where: { userId: { in: allowedIds } },
    select: listSelect,
    orderBy: [{ userId: "asc" }, { updatedAt: "desc" }],
    take: 1000,
  });

  const data = bots.map((b) => {
    const f = runtimeToFlags(b.BotRuntime?.status ?? null);
    return {
      id: b.id,
      userId: b.userId,
      username: b.user?.username ?? b.userId, // ← 추가 (폴백: userId)
      name: b.name,
      mode: modeToString(b.mode),
      status: f.status,
      running: f.running,
    };
  });

  return NextResponse.json({ ok: true, data });
}

// PATCH: 선택된 봇 (관리자 본인 + 산하) 일괄 START/STOP
// 요구사항:
// - START: 상태 ∈ {STOPPED, STOPPING, ERROR} 인 봇만 신규 START_BOT WorkItem 생성
// - STOP : 상태 ∈ {STARTING, RUNNING, ERROR} 인 봇만 신규 STOP_BOT  WorkItem 생성
// - 기존 WorkItem 재큐잉/업데이트 없음. BotRuntime/TradingBot.enabled 변경 없음.
export async function PATCH(req: NextRequest) {
  const adminId = await getUserId();
  if (!adminId) {
    return NextResponse.json(
      { ok: false, error: "UNAUTHORIZED" },
      { status: 401 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "INVALID_JSON" },
      { status: 400 }
    );
  }

  const parsed = PatchPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "INVALID_PAYLOAD" },
      { status: 400 }
    );
  }

  const { action, botIds } = parsed.data;

  // 직속 산하 + 본인 허용
  const edges = await prisma.referralEdge.findMany({
    where: { parentId: adminId },
    select: { childId: true },
    take: 5_000,
  });
  const downlineIds = edges.map((e) => e.childId);
  const allowedIdsSet = new Set<string>([adminId, ...downlineIds]);

  // 대상 봇 중 "허용된 userId" 소유만 추출 + 현재 상태 포함 조회
  const targetBots = await prisma.tradingBot.findMany({
    where: { id: { in: botIds } },
    select: {
      id: true,
      userId: true,
      BotRuntime: { select: { status: true } },
    },
  });

  // 권한 필터
  const authorized = targetBots.filter((t) => allowedIdsSet.has(t.userId));
  if (authorized.length === 0) {
    return NextResponse.json(
      { ok: false, error: "NO_MATCHED_BOTS" },
      { status: 404 }
    );
  }

  // 상태 기준 허용 집합
  const START_ALLOWED = new Set<BotStatus>([
    "STOPPED",
    "STOPPING",
    "ERROR",
  ] as const);

  const STOP_ALLOWED = new Set<BotStatus>([
    "STARTING",
    "RUNNING",
    "ERROR",
  ] as const);

  // 액션별 허용 대상 선별
  const eligible = authorized.filter((t) => {
    const cur: BotStatus = normalizeRuntimeStatus(t.BotRuntime?.status ?? null);
    return action === "START" ? START_ALLOWED.has(cur) : STOP_ALLOWED.has(cur);
  });

  if (eligible.length === 0) {
    return NextResponse.json(
      {
        ok: false,
        error: "NO_ELIGIBLE_BOTS",
        requested: botIds.length,
        eligible: 0,
      },
      { status: 400 }
    );
  }

  // 신규 생성만 (재큐잉/업데이트/상태 변경 없음)
  const QUEUED = "QUEUED" as WorkStatus;
  const START_BOT = "START_BOT" as WorkType;
  const STOP_BOT = "STOP_BOT" as WorkType;

  const created = await prisma.$transaction(async (tx) => {
    let count = 0;
    for (const t of eligible) {
      const now = new Date();
      if (action === "START") {
        await tx.workItem.create({
          data: {
            userId: t.userId,
            botId: t.id,
            type: START_BOT,
            status: QUEUED,
            // dedupeKey는 생략(신규 생성만 의도). 필요시 고유 키 생성으로 충돌 회피 가능.
            sqsGroupId: t.id,
            payload: {
              action: "START_BOT",
              botId: t.id,
              requestedBy: adminId,
              requestedAt: now.toISOString(),
            },
          },
        });
        count += 1;
      } else {
        await tx.workItem.create({
          data: {
            userId: t.userId,
            botId: t.id,
            type: STOP_BOT,
            status: QUEUED,
            sqsGroupId: t.id,
            payload: {
              action: "STOP_BOT",
              botId: t.id,
              requestedBy: adminId,
              requestedAt: now.toISOString(),
            },
          },
        });
        count += 1;
      }
    }
    return count;
  });

  return NextResponse.json({
    ok: true,
    data: {
      updated: created, // 기존 훅 로직과 호환(토스트 메시지 등)
      eligible: eligible.length, // 참고 정보
      requested: botIds.length, // 참고 정보
    },
  });
}
