// src/app/api/admin/bots/list/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { getUserId } from "@/lib/request-user";
import type {
  BotStatus,
  WorkStatus,
  WorkType,
  Prisma,
} from "@/generated/prisma";

// ─────────────────────────────────────────
// select 공통
// ─────────────────────────────────────────
const listSelect = {
  id: true,
  userId: true,
  name: true,
  mode: true,
  // 런타임 정보 (workerId까지 포함)
  BotRuntime: {
    select: {
      status: true,
      workerId: true,
    },
  },
  user: { select: { username: true } },
} as const;

// ─────────────────────────────────────────
// query/body schema
// ─────────────────────────────────────────
const PatchPayloadSchema = z.object({
  action: z.union([z.literal("START"), z.literal("STOP")]),
  botIds: z.array(z.string().min(1)).min(1),
});

// page / pageSize / running 필터까지
const PageQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
  running: z
    .enum(["ALL", "RUNNING", "STOPPED", "ERROR"])
    .optional()
    .default("ALL"),
});

// ─────────────────────────────────────────
// helpers
// ─────────────────────────────────────────

// TradingBot.mode -> "SINGLE" | "MULTI"
function modeToString(mode: unknown): "SINGLE" | "MULTI" {
  return mode === "MULTI" ? "MULTI" : "SINGLE";
}

// BotRuntime.status -> { status, running }
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

// null인 경우 STOPPED 취급해서 enum 맞춰줌
function normalizeRuntimeStatus(s: string | null): BotStatus {
  return (s ?? "STOPPED") as BotStatus;
}

/** 본인 포함 전체 다운라인 유저 id 집합 */
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
  return visited;
}

// ─────────────────────────────────────────
// GET /api/admin/bots/list
//   ?page=1&pageSize=20&running=RUNNING|STOPPED|ERROR|ALL
// ─────────────────────────────────────────
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
    running: searchParams.get("running") ?? undefined,
  });

  if (!qp.success) {
    return NextResponse.json(
      { ok: false, error: "INVALID_QUERY" },
      { status: 400 }
    );
  }

  const page = qp.data.page;
  const pageSize = qp.data.pageSize;
  const runningFilter = qp.data.running ?? "ALL"; // "ALL" | "RUNNING" | "STOPPED" | "ERROR"

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  // 이 어드민이 다룰 수 있는 userId들 (본인+하위 전체)
  const downlineSet = await collectAllDownlineIds(adminId);
  const allowedIds = [adminId, ...downlineSet];

  // 런타임 상태 필터 -> Prisma.TradingBotWhereInput
  // runningFilter 의미:
  // - "RUNNING": BotRuntime.status in ["RUNNING","STARTING"]
  // - "STOPPED": BotRuntime.status in ["STOPPED","STOPPING"] OR BotRuntime is null
  // - "ERROR":   BotRuntime.status == "ERROR"
  // - "ALL":     제한 없음
  let runtimeWhere: Prisma.TradingBotWhereInput = {};

  if (runningFilter === "RUNNING") {
    runtimeWhere = {
      BotRuntime: {
        is: {
          status: { in: ["RUNNING", "STARTING"] },
        },
      },
    };
  } else if (runningFilter === "ERROR") {
    runtimeWhere = {
      BotRuntime: {
        is: {
          status: "ERROR",
        },
      },
    };
  } else if (runningFilter === "STOPPED") {
    runtimeWhere = {
      OR: [
        {
          BotRuntime: {
            is: {
              status: { in: ["STOPPED", "STOPPING"] },
            },
          },
        },
        {
          BotRuntime: {
            is: null,
          },
        },
      ],
    };
  } else {
    runtimeWhere = {};
  }

  // total count
  const total = await prisma.tradingBot.count({
    where: {
      userId: { in: allowedIds },
      ...runtimeWhere,
    },
  });

  // list
  const bots = await prisma.tradingBot.findMany({
    where: {
      userId: { in: allowedIds },
      ...runtimeWhere,
    },
    select: listSelect,
    orderBy: [
      { BotRuntime: { workerId: "asc" } },
      { userId: "asc" },
      { name: "asc" },
    ],
    skip,
    take,
  });

  // 응답 변환
  const data = bots.map((b) => {
    const st = runtimeToFlags(b.BotRuntime?.status ?? null);
    return {
      id: b.id,
      userId: b.userId,
      username: b.user?.username ?? b.userId,
      name: b.name,
      mode: modeToString(b.mode),
      status: st.status,
      running: st.running,
      workerId: b.BotRuntime?.workerId ?? null,
    };
  });

  return NextResponse.json({
    ok: true,
    data,
    page,
    pageSize,
    total,
  });
}

// ─────────────────────────────────────────
// PATCH /api/admin/bots/list
//   body: { action: "START"|"STOP", botIds: string[] }
//   → 멀티 시작/종료 큐 투입
// ─────────────────────────────────────────
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

  // 본인 + 전체 산하
  const downlineSet = await collectAllDownlineIds(adminId);
  const allowedIdsSet = new Set<string>([adminId, ...downlineSet]);

  // 대상 봇들 로드
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
