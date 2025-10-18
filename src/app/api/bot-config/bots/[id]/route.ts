// src/app/api/bot-config/bots/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";
import type { ApiResponse } from "@/types/bot-config";
import { getUserId } from "@/lib/request-user";

const IdParamSchema = z.object({ id: z.string().min(1) });

/**
 * Next.js 15+: context.params 는 Promise<{ id: string }>
 * -> 반드시 await 해서 사용
 */
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<NextResponse<ApiResponse<null>>> {
  try {
    const rawParams = await context.params; // 👈 중요
    const { id } = IdParamSchema.parse(rawParams);

    // (선택) 소유권 검증이 필요하면 아래 주석 해제
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json<ApiResponse<null>>(
        { ok: false, error: "Unauthorized", code: "UNAUTHORIZED" },
        { status: 401 }
      );
    }

    await prisma.tradingBot.delete({ where: { id } });

    // ✅ ApiResponseOk<T> 는 data 필수
    return NextResponse.json<ApiResponse<null>>(
      { ok: true, data: null },
      { status: 200 }
    );
  } catch (e: unknown) {
    // 존재하지 않으면 Prisma가 P2025 (Record not found)
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2025"
    ) {
      return NextResponse.json<ApiResponse<null>>(
        { ok: false, error: "Bot not found", code: "NOT_FOUND" },
        { status: 404 }
      );
    }

    // Zod 유효성 실패
    if (e instanceof z.ZodError) {
      return NextResponse.json<ApiResponse<null>>(
        {
          ok: false,
          error: "Invalid id",
          code: "INVALID_PARAM",
          issues: e.flatten(),
        },
        { status: 400 }
      );
    }

    // 기타
    const msg = e instanceof Error ? e.message : "UNKNOWN";
    return NextResponse.json<ApiResponse<null>>(
      { ok: false, error: msg, code: "INTERNAL" },
      { status: 500 }
    );
  }
}
