// src/app/api/(site)/my-config/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { encryptAesGcm, getAes256GcmKeyFromEnv } from "@/lib/crypto";
import { getUserId } from "@/lib/request-user";
import {
  DeleteBodySchema,
  DeleteResult,
  DeleteResultSchema,
  ErrorResponse,
  HistoryListSchema,
  PostBodySchema,
  SaveResult,
  SaveResultSchema,
} from "@/app/(site)/my-config/types";

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
    const body = PostBodySchema.parse(json); // UID 포함 검증

    const userId = await getUserId();
    if (!userId) return jsonError(401, { error: "Unauthorized" });

    const exchange = await prisma.exchange.findUnique({
      where: { code: body.exchangeCode },
      select: { id: true, code: true },
    });
    if (!exchange) return jsonError(404, { error: "Exchange not found" });

    // AES-256-GCM 키 획득 및 암호화 (키/시크릿만 암호화, UID는 평문 저장)
    const key = getAes256GcmKeyFromEnv();
    const apiKeyEnc = encryptAesGcm(body.apiKey, key);
    const apiSecretEnc = encryptAesGcm(body.apiSecret, key);

    const saved = await prisma.exchangeCredential.upsert({
      where: { userId_exchangeId: { userId, exchangeId: exchange.id } },
      create: {
        userId,
        exchangeId: exchange.id,
        exchangeUid: body.uid, // 저장
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
        exchangeUid: body.uid, // 업데이트 시 반영
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
      uid: r.exchangeUid ?? undefined, // UID 포함 (레거시 null 보호)
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
      return jsonError(404, { error: "Credential not found" });
    }
    return jsonError(500, { error: "INTERNAL_ERROR" });
  }
}
