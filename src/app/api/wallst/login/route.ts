// src/app/api/wallst/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import type { ErrorResponse } from "@/app/(site)/my-config/types";
import {
  WallstLoginRequestSchema,
  WallstLoginResultSchema,
  type WallstLoginResult,
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
    const body = WallstLoginRequestSchema.parse(json); // { username, password }

    const baseUrl =
      process.env.WALLST_API_BASE_URL ?? "https://wallstreetfuturepro.com/api";

    const upstreamRes = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: body.username,
        password: body.password,
      }),
    });

    const ct = upstreamRes.headers.get("content-type") ?? "";
    if (!ct.includes("application/json")) {
      const textBody = await upstreamRes.text();
      console.log(
        "[wallst/login] upstream non-json response:",
        upstreamRes.status,
        ct,
        textBody
      );
      return jsonError(upstreamRes.status, {
        error: "INVALID_UPSTREAM_RESPONSE",
        details: {
          contentType: ct,
          body: textBody,
        },
      });
    }

    const upstreamJson = (await upstreamRes.json()) as unknown;

    console.log(
      "[wallst/login] upstream response:",
      upstreamRes.status,
      JSON.stringify(upstreamJson, null, 2)
    );

    if (!upstreamRes.ok) {
      return jsonError(upstreamRes.status, {
        error: "WALLST_LOGIN_FAILED",
        details: upstreamJson,
      });
    }

    // 기대 구조에 맞게 파싱: status === "success", remark === "login_success"
    if (
      typeof upstreamJson !== "object" ||
      upstreamJson === null ||
      (upstreamJson as { status?: unknown }).status !== "success"
    ) {
      return jsonError(401, {
        error: "WALLST_LOGIN_FAILED",
        details: upstreamJson,
      });
    }

    const root = upstreamJson as {
      remark?: unknown;
      status?: unknown;
      data?: unknown;
      [k: string]: unknown;
    };

    if (root.remark !== "login_success") {
      return jsonError(401, {
        error: "WALLST_LOGIN_FAILED",
        details: upstreamJson,
      });
    }

    if (root.data === undefined || root.data === null) {
      return jsonError(502, {
        error: "WALLST_LOGIN_PARSE_ERROR",
        details: "data field is missing in wallST login response",
      });
    }

    if (typeof root.data !== "object") {
      return jsonError(502, {
        error: "WALLST_LOGIN_PARSE_ERROR",
        details: "data field is not an object",
      });
    }

    const data = root.data as {
      access_token?: unknown;
      token_type?: unknown;
      user?: unknown;
      [k: string]: unknown;
    };

    if (typeof data.access_token !== "string") {
      return jsonError(502, {
        error: "WALLST_LOGIN_PARSE_ERROR",
        details:
          "data.access_token is missing or not a string in wallST login response",
      });
    }

    const tokenTypeRaw =
      typeof data.token_type === "string" ? data.token_type : "Bearer";

    const result: WallstLoginResult = {
      tokenType: tokenTypeRaw,
      accessToken: data.access_token,
    };

    // 방어적 검증
    WallstLoginResultSchema.parse(result);

    return NextResponse.json(result, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return jsonError(400, {
        error: "VALIDATION_ERROR",
        details: err.issues,
      });
    }
    if (err instanceof Error) {
      return jsonError(500, {
        error: "INTERNAL_ERROR",
        details: err.message,
      });
    }
    return jsonError(500, { error: "INTERNAL_ERROR" });
  }
}
