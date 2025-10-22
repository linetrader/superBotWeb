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
  user: { select: { username: true } },
} as const;

const PatchPayloadSchema = z.object({
  action: z.union([z.literal("START"), z.literal("STOP")]),
  botIds: z.array(z.string().min(1)).min(1),
});

const PageQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20), // 기본 20, 최대 100
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

/** adminId 기준으로 모든(다단계) 산하 userId 수집 (BFS) */
async function collectAllDownlineIds(rootUserId: string): Promise<Set<string>> {
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
  return visited; // root 제외: 실제 산하만 포함
}

// GET: 관리자 본인 + 산하(모든 레벨) 봇 목록 (페이지네이션)
export async function GET(req: NextRequest) {
  const adminId = await getUserId();
  if (!adminId) {
    return NextResponse.json(
      { ok: false, error: "UNAUTHORIZED" },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(req.url);
  const qp = PageQuerySchema.safeParse({
    page: searchParams.get("page"),
    pageSize: searchParams.get("pageSize"),
  });
  if (!qp.success) {
    return NextResponse.json(
      { ok: false, error: "INVALID_QUERY" },
      { status: 400 }
    );
  }
  const page = qp.data.page;
  const pageSize = qp.data.pageSize;
  const skip = (page - 1) * pageSize;
  const take = pageSize;

  // ✅ 모든 산하 수집 + 본인 포함
  const downlineSet = await collectAllDownlineIds(adminId);
  const allowedIds = [adminId, ...downlineSet];

  // total
  const total = await prisma.tradingBot.count({
    where: { userId: { in: allowedIds } },
  });

  // 목록
  const bots = await prisma.tradingBot.findMany({
    where: { userId: { in: allowedIds } },
    select: listSelect,
    orderBy: [{ userId: "asc" }, { updatedAt: "desc" }],
    skip,
    take,
  });

  const data = bots.map((b) => {
    const f = runtimeToFlags(b.BotRuntime?.status ?? null);
    return {
      id: b.id,
      userId: b.userId,
      username: b.user?.username ?? b.userId,
      name: b.name,
      mode: modeToString(b.mode),
      status: f.status,
      running: f.running,
    };
  });

  return NextResponse.json({ ok: true, data, page, pageSize, total });
}

// PATCH: 선택된 봇 (관리자 본인 + 산하 전체) 일괄 START/STOP
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

  // ✅ 모든 산하 수집 + 본인 포함
  const downlineSet = await collectAllDownlineIds(adminId);
  const allowedIdsSet = new Set<string>([adminId, ...downlineSet]);

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
      updated: created,
      eligible: eligible.length,
      requested: botIds.length,
    },
  });
}
