import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";
import { requireAdmin } from "@/app/admin/exchanges/list/gaurd/auth";
import {
  ExchangeCredentialItemSchema,
  ExchangeCredentialListResponseSchema,
  ExchangeCredentialUpdateBodySchema,
  type ExchangeCredentialItem,
  type ExchangeCredentialListResponse,
  type ExchangeCredentialUpdateBody,
  type ErrorResponse,
} from "@/app/admin/exchanges/credential/types";

export const runtime = "nodejs";

function jsonError(
  status: number,
  payload: ErrorResponse
): NextResponse<ErrorResponse> {
  return NextResponse.json(payload, { status });
}

export async function GET(): Promise<NextResponse> {
  try {
    await requireAdmin(); // ← 인자 제거

    const rows = await prisma.exchangeCredential.findMany({
      orderBy: [{ updatedAt: "desc" }],
      select: {
        id: true,
        user: { select: { username: true } },
        exchangeId: true,
        exchange: { select: { code: true, name: true } },
        exchangeUid: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    const items: ExchangeCredentialItem[] = rows.map((r) => ({
      id: r.id,
      username: r.user.username,
      exchangeId: r.exchangeId,
      exchangeCode: r.exchange.code,
      exchangeName: r.exchange.name,
      exchangeUid: r.exchangeUid ?? null,
      createdAt: r.createdAt.toISOString(),
      updatedAt: r.updatedAt.toISOString(),
    }));

    items.forEach((it) => ExchangeCredentialItemSchema.parse(it));
    const body: ExchangeCredentialListResponse = { items };
    ExchangeCredentialListResponseSchema.parse(body);

    return NextResponse.json(body, { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      const msg = err.message;
      const status =
        msg === "Unauthorized" ? 401 : msg === "Forbidden" ? 403 : 500;
      return jsonError(status, { error: msg });
    }
    return jsonError(500, { error: "INTERNAL_ERROR" });
  }
}

export async function PATCH(req: NextRequest): Promise<NextResponse> {
  try {
    await requireAdmin(); // ← 인자 제거

    const json = await req.json();
    const body: ExchangeCredentialUpdateBody =
      ExchangeCredentialUpdateBodySchema.parse(json);

    const toUpdate: { exchangeUid?: string | null } = {};
    if (body.exchangeUid !== undefined) {
      toUpdate.exchangeUid = body.exchangeUid.trim().length
        ? body.exchangeUid
        : null;
    }
    if (Object.keys(toUpdate).length === 0) {
      return jsonError(400, { error: "No updatable fields" });
    }

    const updated = await prisma.exchangeCredential.update({
      where: { id: body.id },
      data: toUpdate,
      select: {
        id: true,
        user: { select: { username: true } },
        exchangeId: true,
        exchange: { select: { code: true, name: true } },
        exchangeUid: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    const item: ExchangeCredentialItem = {
      id: updated.id,
      username: updated.user.username,
      exchangeId: updated.exchangeId,
      exchangeCode: updated.exchange.code,
      exchangeName: updated.exchange.name,
      exchangeUid: updated.exchangeUid ?? null,
      createdAt: updated.createdAt.toISOString(),
      updatedAt: updated.updatedAt.toISOString(),
    };
    ExchangeCredentialItemSchema.parse(item);

    return NextResponse.json(item, { status: 200 });
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2025"
    ) {
      return jsonError(404, { error: "Not found" });
    }
    if (err instanceof Error) {
      const msg = err.message;
      const status =
        msg === "Unauthorized" ? 401 : msg === "Forbidden" ? 403 : 400;
      return jsonError(status, { error: msg });
    }
    return jsonError(500, { error: "INTERNAL_ERROR" });
  }
}
