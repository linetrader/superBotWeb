// src/app/api/(site)/bot-control/start/route.ts
import { NextRequest } from "next/server";
import { z } from "zod";
import { getUserId } from "@/lib/request-user";
import { controlBots } from "@/server/botControlService";
import { isBotCurrentlyRunning } from "@/server/botRuntimeService";

export const runtime = "nodejs";

const BodySchema = z.object({ id: z.string().min(1) });

export async function POST(req: NextRequest) {
  // 로그인 사용자 확인
  const userId = await getUserId();
  if (!userId) {
    return new Response("UNAUTH", { status: 401 });
  }

  // JSON 파싱
  let bodyUnknown: unknown;
  try {
    bodyUnknown = await req.json();
  } catch {
    return new Response("INVALID_JSON", { status: 400 });
  }

  const parsed = BodySchema.safeParse(bodyUnknown);
  if (!parsed.success) {
    return new Response(parsed.error.message, { status: 400 });
  }

  const botId = parsed.data.id;

  // (1) 이미 돌고 있으면 큐에 넣지 않고 거부
  const running = await isBotCurrentlyRunning(botId);
  if (running) {
    // 409 Conflict 로 응답. 메시지는 프론트에서 그대로 띄워도 됨.
    return new Response("ALREADY_RUNNING", { status: 409 });
  }

  // (2) 아직 안 돌고 있으면 START 큐 enqueue 시도
  const result = await controlBots({
    requesterId: userId,
    action: "START",
    botIds: [botId],
  });

  // controlBots 결과 해석
  if (result.updated === 0) {
    const first = result.results[0];
    const msg = first?.reason ?? "FAILED_TO_ENQUEUE_START";
    const status = msg === "NOT_AUTHORIZED_OR_NOT_FOUND" ? 404 : 400;
    return new Response(msg, { status });
  }

  const first = result.results[0] ?? null;

  return Response.json({
    ok: true,
    workItem: first?.workItem ?? null,
  });
}
