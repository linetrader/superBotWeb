import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserId } from "@/lib/request-user";
import { BotMode } from "@/generated/prisma";

// BotStatus는 프론트가 기대하는 표기 ("RUNNING" | "STOPPED" | "UNKNOWN")
type BotStatus = "RUNNING" | "STOPPED" | "UNKNOWN";

/**
 * 런타임 레코드로부터 표기용 BotStatus 계산
 * - BotRuntime가 없으면 STOPPED
 * - BotRuntime.status === "STOPPED" 면 STOPPED
 * - 그 외 값(예: "RUNNING", "STARTING" 등)은 RUNNING 으로 취급
 */
function runtimeToBotStatus(runtime: { status: string } | null): BotStatus {
  if (!runtime) return "STOPPED";
  if (runtime.status === "STOPPED") return "STOPPED";
  return "RUNNING";
}

/**
 * GET /api/bot-config/bots
 * - 현재 로그인 사용자의 봇 목록
 * - 프론트에서 기대하는 BotRow 형태로 변환
 *   { id, name, mode, symbol, enabled, status }
 */
export async function GET() {
  const userId = await getUserId();
  if (!userId) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const bots = await prisma.tradingBot.findMany({
    where: { userId },
    select: {
      id: true,
      name: true,
      mode: true,
      symbol: true,
      enabled: true,
      // ⚠️ 모델의 필드명이 스키마상 "BotRuntime" 인 점을 반영
      BotRuntime: {
        select: {
          status: true, // 예: "RUNNING" | "STOPPED" | "STARTING" ...
        },
      },
    },
    orderBy: [{ updatedAt: "desc" }],
  });

  const rows = bots.map((b) => {
    const status = runtimeToBotStatus(b.BotRuntime ?? null);

    return {
      id: b.id,
      name: b.name,
      mode: (b.mode === BotMode.SINGLE ? "SINGLE" : "MULTI") as
        | "SINGLE"
        | "MULTI",
      symbol: b.symbol,
      enabled: b.enabled,
      status,
    };
  });

  return NextResponse.json({ ok: true, data: rows });
}
