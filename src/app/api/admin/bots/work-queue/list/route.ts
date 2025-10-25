// src/app/api/admin/bots/work-queue/list/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserId } from "@/lib/request-user";
import { Prisma, WorkStatus } from "@/generated/prisma";

// "ALL"은 프론트에서 "전체" 선택일 때 사용
// WorkStatus 는 Prisma enum 으로 들어온 상태값(QUEUED, IN_PROGRESS, SUCCEEDED, FAILED, CANCELED 등)
type StatusFilterParam = WorkStatus | "ALL";

// 하위 유저까지 접근 가능한 userId 수집
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

export async function GET(req: NextRequest) {
  const adminId = await getUserId();
  if (!adminId) {
    return NextResponse.json(
      { ok: false, error: "UNAUTHORIZED" },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(req.url);

  // page
  const pageRaw = searchParams.get("page");
  const pageParsed = pageRaw ? parseInt(pageRaw, 10) : 1;
  const page = Number.isNaN(pageParsed) || pageParsed < 1 ? 1 : pageParsed;

  // pageSize
  const pageSizeRaw = searchParams.get("pageSize");
  const pageSizeParsed = pageSizeRaw ? parseInt(pageSizeRaw, 10) : 20;
  const pageSize =
    Number.isNaN(pageSizeParsed) || pageSizeParsed < 1
      ? 20
      : Math.min(pageSizeParsed, 100);

  // status 필터
  const statusParamRaw = searchParams.get("status");
  const statusParam: StatusFilterParam =
    statusParamRaw && statusParamRaw.length > 0
      ? (statusParamRaw as StatusFilterParam)
      : "ALL";

  // 접근 가능한 userId 들
  const downlineSet = await collectAllDownlineIds(adminId);
  const allowedUserIds = new Set<string>([adminId, ...downlineSet]);

  // Prisma.WorkItemWhereInput 구성
  const whereClause: Prisma.WorkItemWhereInput = {
    userId: { in: Array.from(allowedUserIds) },
  };

  if (statusParam !== "ALL") {
    // statusParam 은 WorkStatus 로 캐스팅 가능
    whereClause.status = statusParam as WorkStatus;
  }

  // total count
  const total = await prisma.workItem.count({
    where: whereClause,
  });

  // 목록 조회
  // runs: 최근 1건
  const items = await prisma.workItem.findMany({
    where: whereClause,
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * pageSize,
    take: pageSize,
    select: {
      id: true,
      userId: true,
      botId: true,
      type: true,
      status: true,
      attempts: true,
      dedupeKey: true,
      sqsGroupId: true,
      createdAt: true,
      updatedAt: true,
      bot: {
        select: {
          id: true,
          name: true,
          userId: true,
          user: {
            select: {
              username: true,
            },
          },
        },
      },
      runs: {
        take: 1,
        orderBy: {
          startedAt: "desc",
        },
        select: {
          startedAt: true,
          finishedAt: true,
          exitCode: true,
          error: true,
          workerTaskArn: true,
          queueDelaySec: true,
        },
      },
    },
  });

  // shape 변환
  const rows = items.map((wi) => {
    const lastRun = wi.runs.length > 0 ? wi.runs[0] : null;

    return {
      id: wi.id,
      userId: wi.userId,
      username: wi.bot?.user?.username ?? null,

      botId: wi.botId ?? null,
      botName: wi.bot?.name ?? null,

      type: wi.type,
      status: wi.status,
      attempts: wi.attempts,

      dedupeKey: wi.dedupeKey ?? null,
      sqsGroupId: wi.sqsGroupId ?? null,

      createdAt: wi.createdAt.toISOString(),
      updatedAt: wi.updatedAt.toISOString(),

      lastAttemptStartedAt: lastRun?.startedAt
        ? lastRun.startedAt.toISOString()
        : null,
      lastAttemptFinishedAt: lastRun?.finishedAt
        ? lastRun.finishedAt.toISOString()
        : null,
      lastAttemptExitCode:
        typeof lastRun?.exitCode === "number" ? lastRun.exitCode : null,
      lastAttemptError: lastRun?.error ?? null,
      lastAttemptWorkerTaskArn: lastRun?.workerTaskArn ?? null,
      queueDelaySec:
        typeof lastRun?.queueDelaySec === "number"
          ? lastRun.queueDelaySec
          : null,
    };
  });

  return NextResponse.json({
    ok: true,
    data: rows,
    total,
  });
}
