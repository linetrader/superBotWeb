// src/app/api/bot-control/start/route.ts
import { NextRequest } from "next/server";
import { z } from "zod";
import { enqueueWorkItem } from "@/server/enqueueWorkItem";
import { WorkType } from "@/generated/prisma";
import { getUserId } from "@/lib/request-user";

export const runtime = "nodejs";

// 클라이언트는 { id: string }만 보내면 됩니다(기존 성공 경로 유지)
const BodySchema = z.object({ id: z.string().min(1) });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    // Zod 에러 문자열 그대로(디버깅 가시성)
    return new Response(parsed.error.message, { status: 400 });
  }

  const userId = await getUserId();
  if (!userId) return new Response("UNAUTH", { status: 401 });

  const botId = parsed.data.id;

  try {
    const workItem = await enqueueWorkItem({
      userId,
      botId,
      type: WorkType.START_BOT,
      payload: { action: "START_BOT", botId, requestedBy: userId },
      // sqsGroupId 기본값은 enqueueWorkItem 내부에서 botId로 설정
    });

    return Response.json({ ok: true, workItem });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "UNKNOWN_ERROR";
    if (msg === "BOT_NOT_FOUND_OR_NOT_OWNED") {
      // 존재하지 않거나 소유하지 않은 봇
      return new Response(msg, { status: 404 });
    }
    return new Response(`FAILED_TO_ENQUEUE_START: ${msg}`, { status: 500 });
  }
}
