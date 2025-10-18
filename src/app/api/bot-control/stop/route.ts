// src/app/api/bot-control/stop/route.ts
import { NextRequest } from "next/server";
import { z } from "zod";
import { enqueueWorkItem } from "@/server/enqueueWorkItem";
import { WorkType } from "@/generated/prisma";
import { getUserId } from "@/lib/request-user";

export const runtime = "nodejs";

const BodySchema = z.object({ id: z.string().min(1) });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return new Response(parsed.error.message, { status: 400 });
  }

  const userId = await getUserId();
  if (!userId) return new Response("UNAUTH", { status: 401 });

  const botId = parsed.data.id;

  try {
    const workItem = await enqueueWorkItem({
      userId,
      botId,
      type: WorkType.STOP_BOT,
      payload: { action: "STOP_BOT", botId, requestedBy: userId },
      // STOP도 멱등: 기존 dedupeKey가 있으면 상태는 보존하고 payload만 갱신
    });

    return Response.json({ ok: true, workItem });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "UNKNOWN_ERROR";
    if (msg === "BOT_NOT_FOUND_OR_NOT_OWNED") {
      return new Response(msg, { status: 404 });
    }
    return new Response(`FAILED_TO_ENQUEUE_STOP: ${msg}`, { status: 500 });
  }
}
