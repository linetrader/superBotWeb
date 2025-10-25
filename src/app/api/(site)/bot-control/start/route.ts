// src/app/api/(site)/bot-control/start/route.ts
import { NextRequest } from "next/server";
import { z } from "zod";
import { getUserId } from "@/lib/request-user";
import { controlBots } from "@/server/botControlService";

export const runtime = "nodejs";

const BodySchema = z.object({ id: z.string().min(1) });

export async function POST(req: NextRequest) {
  // 로그인 사용자
  const userId = await getUserId();
  if (!userId) {
    return new Response("UNAUTH", { status: 401 });
  }

  // 바디 파싱
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

  // 공용 서비스 호출 (action=START, 단일 botId)
  const result = await controlBots({
    requesterId: userId,
    action: "START",
    botIds: [botId],
  });

  // 권한 / eligible / enqueue 여부 확인 후 응답
  if (result.updated === 0) {
    // 실패 케이스 추려서 표시
    const first = result.results[0];
    const msg = first?.reason ?? "FAILED_TO_ENQUEUE_START";
    const status = msg === "NOT_AUTHORIZED_OR_NOT_FOUND" ? 404 : 400;
    return new Response(msg, { status });
  }

  return Response.json({
    ok: true,
    workItem: result.results[0]?.workItem ?? null,
  });
}
