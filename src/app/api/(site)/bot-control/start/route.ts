// src/app/api/(site)/bot-control/start/route.ts
import { NextRequest } from "next/server";
import { z } from "zod";
import { getUserId } from "@/lib/request-user";
import { controlBots } from "@/server/botControlService";
import {
  isBotCurrentlyRunning,
  getBotRuntimeStatus,
} from "@/server/botRuntimeService"; // ← 추가
import { randomUUID } from "crypto";

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
    return new Response("UNAUTH", { status: 401 });
  }

  // JSON 파싱
  let bodyUnknown: unknown;
  try {
    bodyUnknown = await req.json();
  } catch {
    dbg("INVALID_JSON", { reqId, durMs: msSince(t0) });
    return new Response("INVALID_JSON", { status: 400 });
  }

  const parsed = BodySchema.safeParse(bodyUnknown);
  if (!parsed.success) {
    dbg("BAD_BODY", { reqId, error: parsed.error.message, durMs: msSince(t0) });
    return new Response(parsed.error.message, { status: 400 });
  }

  const botId = parsed.data.id;

  // (0) 상태가 STOPPED가 아니면 큐잉 금지
  const status = await getBotRuntimeStatus(botId); // "STOPPED" | "STARTING" | "RUNNING" | "STOPPING" | "ERROR" | null
  dbg("STATUS_CHECK", { reqId, botId, status });
  if (status !== null && status !== "STOPPED") {
    // 더 구체적인 거절 사유를 제공
    dbg("NOT_STOPPED_REJECT", { reqId, botId, status, durMs: msSince(t0) });
    return new Response("NOT_STOPPED", { status: 409 });
  }

  // (1) 이미 돌고 있으면 큐에 넣지 않고 거부 (보강 체크)
  const running = await isBotCurrentlyRunning(botId);
  dbg("RUNNING_CHECK", { reqId, botId, running });
  if (running) {
    dbg("ALREADY_RUNNING", { reqId, botId, durMs: msSince(t0) });
    return new Response("ALREADY_RUNNING", { status: 409 });
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

  // controlBots 결과 해석
  if (result.updated === 0) {
    const first = result.results[0];
    const msg = first?.reason ?? "FAILED_TO_ENQUEUE_START";
    const statusCode = msg === "NOT_AUTHORIZED_OR_NOT_FOUND" ? 404 : 400;
    dbg("ENQUEUE_START_FAIL", {
      reqId,
      botId,
      msg,
      status: statusCode,
      durMs: msSince(t0),
    });
    return new Response(msg, { status: statusCode });
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
