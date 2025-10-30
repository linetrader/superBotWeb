// src/app/api/(site)/bot-control/stop/route.ts
import { NextRequest } from "next/server";
import { z } from "zod";
import { getUserId } from "@/lib/request-user";
import { controlBots } from "@/server/botControlService";
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
    console.log(`[bot-control:stop] ${label} ${ts} ${JSON.stringify(fields)}`);
  } catch {
    console.log(`[bot-control:stop] ${label} ${ts}`, fields);
  }
}

// ---- route ----
const BodySchema = z.object({ id: z.string().min(1) });

export async function POST(req: NextRequest) {
  const reqId = randomUUID();
  const t0 = nowNs();
  dbg("REQUEST_IN", { reqId });

  const userId = await getUserId();
  if (!userId) {
    dbg("UNAUTH", { reqId, durMs: msSince(t0) });
    return new Response("UNAUTH", { status: 401 });
  }

  // JSON 파싱
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    dbg("INVALID_JSON", { reqId, durMs: msSince(t0) });
    return new Response("INVALID_JSON", { status: 400 });
  }

  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    dbg("BAD_BODY", { reqId, error: parsed.error.message, durMs: msSince(t0) });
    return new Response(parsed.error.message, { status: 400 });
  }

  const botId = parsed.data.id;

  // 단일 botId STOP 시도
  dbg("ENQUEUE_STOP_ATTEMPT", { reqId, botId, userId });
  const result = await controlBots({
    requesterId: userId,
    action: "STOP",
    botIds: [botId],
  });

  dbg("ENQUEUE_STOP_RESULT", {
    reqId,
    botId,
    updated: result.updated,
    requested: result.requested,
    eligible: result.eligible,
  });

  if (result.updated === 0) {
    const first = result.results[0];
    const msg = first?.reason ?? "FAILED_TO_ENQUEUE_STOP";
    const status = msg === "NOT_AUTHORIZED_OR_NOT_FOUND" ? 404 : 400;
    dbg("ENQUEUE_STOP_FAIL", {
      reqId,
      botId,
      msg,
      status,
      durMs: msSince(t0),
    });
    return new Response(msg, { status });
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
