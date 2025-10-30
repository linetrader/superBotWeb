// src/app/api/(site)/bot-control/start/route.ts
import { NextRequest } from "next/server";
import { z } from "zod";
import { getUserId } from "@/lib/request-user";
import { controlBots } from "@/server/botControlService";
import {
  isBotCurrentlyRunning,
  getBotRuntimeStatus,
} from "@/server/botRuntimeService";
import prisma from "@/lib/prisma";
import { randomUUID } from "crypto";
import { BotStatus } from "@/generated/prisma";

export const runtime = "nodejs";

// ---- debug helpers ----
const API_DEBUG: boolean = (() => {
  const v = process.env.API_BOT_CONTROL_DEBUG;
  if (!v) return false;
  const s = v.trim().toLowerCase();
  return s === "1" || s === "true" || s === "yes" || s === "y" || s === "on";
})();

function nowNs(): bigint {
  return process.hrtime.bigint();
}
function msSince(start: bigint): number {
  const ns = process.hrtime.bigint() - start;
  return Number(ns / BigInt(1_000_000));
}
function dbg(label: string, fields: Record<string, unknown>): void {
  if (!API_DEBUG) return;
  const ts = new Date().toISOString();
  try {
    console.log(`[bot-control:start] ${label} ${ts} ${JSON.stringify(fields)}`);
  } catch {
    console.log(`[bot-control:start] ${label} ${ts}`, fields);
  }
}

// ---- helpers ----
function jsonError(status: number, code: string, detail?: unknown): Response {
  const payload: { ok: false; error: string; detail?: unknown } = {
    ok: false,
    error: code,
  };
  if (typeof detail !== "undefined") payload.detail = detail;
  return Response.json(payload, { status });
}

// ---- route ----
const BodySchema = z.object({ id: z.string().min(1) });

export async function POST(req: NextRequest) {
  const reqId = randomUUID();
  const t0 = nowNs();
  dbg("REQUEST_IN", { reqId });

  // 로그인 사용자 확인
  const userId = await getUserId();
  if (!userId) {
    dbg("UNAUTH", { reqId, durMs: msSince(t0) });
    return jsonError(401, "UNAUTH");
  }

  // JSON 파싱
  let bodyUnknown: unknown;
  try {
    bodyUnknown = await req.json();
  } catch {
    dbg("INVALID_JSON", { reqId, durMs: msSince(t0) });
    return jsonError(400, "INVALID_JSON");
  }

  const parsed = BodySchema.safeParse(bodyUnknown);
  if (!parsed.success) {
    const msg = parsed.error.message;
    dbg("BAD_BODY", { reqId, error: msg, durMs: msSince(t0) });
    return jsonError(400, "BAD_BODY", msg);
  }

  const botId = parsed.data.id;

  // (0) 상태 판독
  const status = await getBotRuntimeStatus(botId); // "STOPPED" | "STARTING" | "RUNNING" | "STOPPING" | "ERROR" | null
  dbg("STATUS_CHECK", { reqId, botId, status });

  // (0-1) 이미 RUNNING 판단 보강
  const running = await isBotCurrentlyRunning(botId);
  dbg("RUNNING_CHECK", { reqId, botId, running });
  if (running) {
    dbg("ALREADY_RUNNING", { reqId, botId, durMs: msSince(t0) });
    return jsonError(409, "ALREADY_RUNNING");
  }

  // (0-2) START 큐잉 허용 정책
  //  - 허용: status ∈ { null, STOPPED, STOPPING, ERROR }
  //  - 거부: status ∈ { STARTING, RUNNING }
  const allowedStatuses: ReadonlySet<BotStatus | null> =
    new Set<BotStatus | null>([
      null,
      BotStatus.STOPPED,
      BotStatus.STOPPING,
      BotStatus.ERROR,
    ]);
  if (!allowedStatuses.has(status)) {
    // STARTING | RUNNING
    dbg("NOT_ALLOWED_TO_START", { reqId, botId, status, durMs: msSince(t0) });
    return jsonError(409, "NOT_ALLOWED_TO_START", { status });
  }

  // (1) 선반영: desiredState='RUNNING'
  //  - row가 있으면 desiredState만 RUNNING으로 올림 (status는 그대로 둠)
  //  - row가 없으면 생성(status='STARTING', desiredState='RUNNING')
  try {
    await prisma.botRuntime.upsert({
      where: { botId },
      update: {
        desiredState: BotStatus.RUNNING,
        updatedAt: new Date(),
      },
      create: {
        botId,
        status: BotStatus.STOPPED,
        desiredState: BotStatus.RUNNING,
        updatedAt: new Date(),
      },
    });
    dbg("UPSERT_DESIRED_RUNNING", { reqId, botId });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "UPSERT_FAILED";
    dbg("UPSERT_ERROR", { reqId, botId, msg, durMs: msSince(t0) });
    return jsonError(500, "UPSERT_DESIRED_RUNNING_FAILED", msg);
  }

  // (2) START 큐 enqueue 시도
  dbg("ENQUEUE_START_ATTEMPT", { reqId, botId, userId });
  const result = await controlBots({
    requesterId: userId,
    action: "START",
    botIds: [botId],
  });

  dbg("ENQUEUE_START_RESULT", {
    reqId,
    botId,
    updated: result.updated,
    requested: result.requested,
    eligible: result.eligible,
  });

  if (result.updated === 0) {
    const first = result.results[0];
    const msg =
      (first?.reason as string | undefined) ?? "FAILED_TO_ENQUEUE_START";
    const statusCode: number =
      msg === "NOT_AUTHORIZED_OR_NOT_FOUND" ? 404 : 400;
    dbg("ENQUEUE_START_FAIL", {
      reqId,
      botId,
      msg,
      status: statusCode,
      durMs: msSince(t0),
    });
    return jsonError(statusCode, msg);
  }

  const first = result.results[0] ?? null;

  dbg("SUCCESS", {
    reqId,
    botId,
    workItemId: first?.workItem?.id ?? null,
    durMs: msSince(t0),
  });

  return Response.json({
    ok: true,
    workItem: first?.workItem ?? null,
  });
}
