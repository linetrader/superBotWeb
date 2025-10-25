// src/app/api/admin/bots/list/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { getUserId } from "@/lib/request-user";
import {
  collectAllDownlineIds,
  controlBots,
  modeToString,
  runtimeToFlags,
} from "@/server/botControlService";
import type { Prisma } from "@/generated/prisma";

/**
 * 공통 select:
 *  - tradingBot 기본 정보
 *  - BotRuntime.status / workerId (현재 실행상태)
 *  - user.username (관리 UI에서 보여줄 닉네임)
 */
const listSelect = {
  id: true,
  userId: true,
  name: true,
  mode: true,
  BotRuntime: {
    select: {
      status: true,
      workerId: true,
    },
  },
  user: { select: { username: true } },
} as const;

/**
 * PATCH body 유효성 검증
 * action: START or STOP
 * botIds: 최소 1개 이상의 botId 문자열 배열
 */
const PatchPayloadSchema = z.object({
  action: z.union([z.literal("START"), z.literal("STOP")]),
  botIds: z.array(z.string().min(1)).min(1),
});

/**
 * GET query 유효성 검증
 * page / pageSize / running / username
 *
 * running:
 *   - ALL
 *   - RUNNING
 *   - STOPPED
 *   - ERROR
 *
 * username:
 *   - 부분 일치 검색어 (""이면 필터 없음)
 */
const PageQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
  running: z
    .enum(["ALL", "RUNNING", "STOPPED", "ERROR"])
    .optional()
    .default("ALL"),
  username: z.coerce.string().trim().default(""),
});

/**
 * GET /api/admin/bots/list
 * Query:
 *   - page
 *   - pageSize
 *   - running      ("ALL" | "RUNNING" | "STOPPED" | "ERROR")
 *   - username     (부분 일치 username 필터, optional)
 *
 * 동작:
 *   1. 현재 요청자(adminId)를 구한다.
 *   2. adminId + 다운라인(하위 레퍼럴 전체)의 userId 집합만 조회 가능.
 *   3. running 필터와 username 부분검색(대소문자 무시)을 조합해서 Prisma where 구성.
 *   4. total count / page 결과 / 정렬된 목록을 내려준다.
 *
 * 응답:
 * {
 *   ok: true,
 *   data: BotRow[],    // 프론트에서 쓰는 형태에 맞춰 status/running 계산 포함
 *   page,
 *   pageSize,
 *   total
 * }
 *
 * 실패 시:
 * { ok:false, error:"UNAUTHORIZED"|"INVALID_QUERY"|... }
 */
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
    username: searchParams.get("username") ?? "",
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
  const usernameFilter = qp.data.username; // 부분 일치 검색어. ""면 필터 없음

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  // 요청자(adminId) + 다운라인 전체 userId 목록
  // collectAllDownlineIds()는 referralEdge(parentId -> childId)를 BFS로 내려가며
  // 최대 depth 20단계까지 childId를 수집한다.
  const downlineSet = await collectAllDownlineIds(adminId);
  const allowedIds = [adminId, ...downlineSet];

  // 러닝 상태 필터에 따른 부분 where
  // 의미:
  // - RUNNING : BotRuntime.status ∈ ["RUNNING","STARTING"]
  // - STOPPED : BotRuntime.status ∈ ["STOPPED","STOPPING"] OR BotRuntime is null
  // - ERROR   : BotRuntime.status == "ERROR"
  // - ALL     : 제한 없음
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
    // "ALL": 아무 제약도 넣지 않음
    runtimeWhere = {};
  }

  // usernameFilter 조건:
  // usernameFilter === "" 이면 username 제한 없이 allowedIds 전체.
  // usernameFilter !== "" 이면 user.username LIKE %usernameFilter% (대소문자 무시).
  //
  // 동시에 항상 userId in allowedIds 여야 하므로,
  // 최종 where는 allowedIds + runtimeWhere + (username contains ...) 로 만들어야 한다.
  const baseWhere: Prisma.TradingBotWhereInput = {
    userId: { in: allowedIds },
    ...runtimeWhere,
  };

  const finalWhere: Prisma.TradingBotWhereInput =
    usernameFilter === ""
      ? baseWhere
      : {
          ...baseWhere,
          user: {
            username: {
              contains: usernameFilter,
              mode: "insensitive",
            },
          },
        };

  // total count
  const total = await prisma.tradingBot.count({
    where: finalWhere,
  });

  // 실제 페이지 데이터
  const bots = await prisma.tradingBot.findMany({
    where: finalWhere,
    select: listSelect,
    orderBy: [
      { BotRuntime: { workerId: "asc" } },
      { userId: "asc" },
      { name: "asc" },
    ],
    skip,
    take,
  });

  // 프론트가 바로 렌더 가능한 형태로 변환
  // runtimeToFlags()는
  //   status(null)=>"STOPPED"
  //   running:boolean (RUNNING|STARTING만 true)
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

/**
 * PATCH /api/admin/bots/list
 * body:
 *   {
 *     "action": "START" | "STOP",
 *     "botIds": [ "<botId1>", "<botId2>", ... ]
 *   }
 *
 * 동작:
 *   - 요청자(adminId)의 downline 권한 체크
 *   - 각 봇의 현재 런타임 상태 검사 (START_ALLOWED / STOP_ALLOWED)
 *   - 가능한 봇만 workItem 큐에 enqueue
 *     (enqueueWorkItem은 dedupeKey를 통해 중복된 동일 작업을 멱등하게 처리)
 *   - 결과 요약을 응답
 *
 * 응답 성공 형태 (프론트 parseBulkUpdate와 호환):
 * {
 *   ok: true,
 *   data: {
 *     updated: number,
 *     eligible: number,
 *     requested: number
 *   }
 * }
 *
 * 예외 / 실패 시:
 * { ok:false, error:"UNAUTHORIZED"|"INVALID_JSON"|"INVALID_PAYLOAD"|... }
 */
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

  // controlBots()는:
  //  - collectAllDownlineIds()로 권한 필터
  //  - 현재 BotRuntime.status를 보고 START/STOP 가능한지 판별
  //  - enqueueWorkItem()을 통해 workItem을 멱등하게 생성/업데이트
  const result = await controlBots({
    requesterId: adminId,
    action,
    botIds,
  });

  // 기존 프론트(parseBulkUpdate)는 ok:false 면 토스트 에러로 처리하므로
  // updated=0 인 경우를 에러 취급해준다.
  if (result.updated === 0) {
    return NextResponse.json(
      {
        ok: false,
        error: result.eligible === 0 ? "NO_ELIGIBLE_BOTS" : "NO_MATCHED_BOTS",
        requested: result.requested,
        eligible: result.eligible,
      },
      { status: 400 }
    );
  }

  // 프론트 parseBulkUpdate()가 기대하는 형식
  return NextResponse.json({
    ok: true,
    data: {
      updated: result.updated,
      eligible: result.eligible,
      requested: result.requested,
    },
  });
}
