// src/app/api/credentials/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
//import { Prisma } from "@prisma/client";
import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { encryptAesGcm, getAes256GcmKeyFromEnv } from "@/lib/crypto";
import { getUserId } from "@/lib/request-user";
import {
  PostBodySchema,
  SaveResultSchema,
  HistoryListSchema,
  DeleteBodySchema,
  DeleteResultSchema,
  type SaveResult,
  type ErrorResponse,
  type DeleteResult,
} from "@/types/my-config";

export const runtime = "nodejs";

function jsonError(
  status: number,
  payload: ErrorResponse
): NextResponse<ErrorResponse> {
  return NextResponse.json(payload, { status });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const json = await req.json();
    const body = PostBodySchema.parse(json); // 입력 검증 (Zod)

    const userId = await getUserId();
    if (!userId) return jsonError(401, { error: "Unauthorized" });

    const exchange = await prisma.exchange.findUnique({
      where: { code: body.exchangeCode },
      select: { id: true, code: true },
    });
    if (!exchange) return jsonError(404, { error: "Exchange not found" });

    // AES-256-GCM 키 획득 및 암호화
    const key = getAes256GcmKeyFromEnv();
    const apiKeyEnc = encryptAesGcm(body.apiKey, key);
    const apiSecretEnc = encryptAesGcm(body.apiSecret, key);

    const saved = await prisma.exchangeCredential.upsert({
      where: { userId_exchangeId: { userId, exchangeId: exchange.id } },
      create: {
        userId,
        exchangeId: exchange.id,
        apiKeyCipher: apiKeyEnc.cipherTextB64,
        apiKeyIv: apiKeyEnc.ivB64,
        apiKeyTag: apiKeyEnc.tagB64,
        secretCipher: apiSecretEnc.cipherTextB64,
        secretIv: apiSecretEnc.ivB64,
        secretTag: apiSecretEnc.tagB64,
        keyAlg: "aes-256-gcm",
        keyVersion: 1,
      },
      update: {
        apiKeyCipher: apiKeyEnc.cipherTextB64,
        apiKeyIv: apiKeyEnc.ivB64,
        apiKeyTag: apiKeyEnc.tagB64,
        secretCipher: apiSecretEnc.cipherTextB64,
        secretIv: apiSecretEnc.ivB64,
        secretTag: apiSecretEnc.tagB64,
        keyAlg: "aes-256-gcm",
        keyVersion: 1,
      },
      select: { id: true, updatedAt: true },
    });

    const result: SaveResult = {
      id: saved.id,
      exchangeCode: exchange.code,
      updatedAt: saved.updatedAt.toISOString(),
    };

    SaveResultSchema.parse(result);
    return NextResponse.json(result, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return jsonError(400, { error: "VALIDATION_ERROR", details: err.issues });
    }
    return jsonError(500, { error: "INTERNAL_ERROR" });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const userId = await getUserId();
    if (!userId) return jsonError(401, { error: "Unauthorized" });

    const rows = await prisma.exchangeCredential.findMany({
      where: { userId },
      orderBy: [{ updatedAt: "desc" }],
      include: { exchange: { select: { code: true, name: true } } },
    });

    const list = rows.map((r) => ({
      id: r.id,
      exchangeCode: r.exchange.code,
      exchangeName: r.exchange.name,
      createdAt: r.createdAt.toISOString(),
      updatedAt: r.updatedAt.toISOString(),
    }));

    HistoryListSchema.parse(list);
    return NextResponse.json(list, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return jsonError(500, {
        error: "SCHEMA_VALIDATION_FAILED",
        details: err.issues,
      });
    }
    return jsonError(500, { error: "INTERNAL_ERROR" });
  }
}

// ✅ DELETE: 사용자×거래소 조합의 자격 증명 삭제
export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const userId = await getUserId();
    if (!userId) return jsonError(401, { error: "Unauthorized" });

    const json = await req.json();
    const body = DeleteBodySchema.parse(json); // { exchangeCode }

    const exchange = await prisma.exchange.findUnique({
      where: { code: body.exchangeCode },
      select: { id: true, code: true },
    });
    if (!exchange) return jsonError(404, { error: "Exchange not found" });

    // 존재하지 않으면 Prisma가 P2025를 던짐
    const deleted = await prisma.exchangeCredential.delete({
      where: { userId_exchangeId: { userId, exchangeId: exchange.id } },
      select: { id: true },
    });

    const result: DeleteResult = {
      id: deleted.id,
      exchangeCode: exchange.code,
      ok: true,
    };
    DeleteResultSchema.parse(result);

    return NextResponse.json(result, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return jsonError(400, { error: "VALIDATION_ERROR", details: err.issues });
    }
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2025"
    ) {
      // 삭제 대상 없음
      return jsonError(404, { error: "Credential not found" });
    }
    return jsonError(500, { error: "INTERNAL_ERROR" });
  }
}
