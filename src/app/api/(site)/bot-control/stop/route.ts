// src/app/api/(site)/bot-control/stop/route.ts
import { NextRequest } from "next/server";
import { z } from "zod";
import { getUserId } from "@/lib/request-user";
import { controlBots } from "@/server/botControlService";

export const runtime = "nodejs";

const BodySchema = z.object({ id: z.string().min(1) });

export async function POST(req: NextRequest) {
  const userId = await getUserId();
  if (!userId) {
    return new Response("UNAUTH", { status: 401 });
  }

  // JSON 파싱
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("INVALID_JSON", { status: 400 });
  }

  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return new Response(parsed.error.message, { status: 400 });
  }

  const botId = parsed.data.id;

  // 단일 botId STOP 시도
  const result = await controlBots({
    requesterId: userId,
    action: "STOP",
    botIds: [botId],
  });

  if (result.updated === 0) {
    const first = result.results[0];
    const msg = first?.reason ?? "FAILED_TO_ENQUEUE_STOP";
    const status = msg === "NOT_AUTHORIZED_OR_NOT_FOUND" ? 404 : 400;
    return new Response(msg, { status });
  }

  const first = result.results[0] ?? null;

  return Response.json({
    ok: true,
    workItem: first?.workItem ?? null,
  });
}
