import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { getUserId } from "@/lib/request-user";

// 공용 셀렉트: 목록
const userListSelect = {
  id: true,
  username: true,
  email: true,
  name: true,
  countryCode: true,
  createdAt: true,
} as const;

// 상세: UserInfo by userId
const userInfoSelect = {
  id: true,
  userId: true,
  referralCode: true,
  level: true,
  googleOtpEnabled: true,
  googleOtpSecret: true,
  createdAt: true,
  updatedAt: true,
} as const;

const IdParamSchema = z.string().min(1);

// PATCH payload (레벨 업데이트)
const PatchPayloadSchema = z.object({
  userId: z.string().min(1),
  level: z.number().int().min(1),
});

// GET /api/admin/users/list
// - 목록: ?id 미지정 → "관리자 본인 + 산하(downlines)" 사용자 리스트 반환
// - 상세: ?id=USER_ID → "관리자 본인 또는 산하"일 때만 UserInfo 반환(없으면 data=null)
export async function GET(req: NextRequest) {
  const adminId = await getUserId();
  if (!adminId) {
    return NextResponse.json(
      { ok: false, error: "UNAUTHORIZED" },
      { status: 401 }
    );
  }

  // 직속 산하(downlines) 조회
  const edges = await prisma.referralEdge.findMany({
    where: { parentId: adminId },
    select: { childId: true },
    take: 5_000,
  });
  const downlineIds = edges.map((e) => e.childId);

  // ✅ 본인 포함
  const allowedIdsSet = new Set<string>([adminId, ...downlineIds]);
  const allowedIds = Array.from(allowedIdsSet);

  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id");

  // 상세
  if (idParam !== null) {
    const parse = IdParamSchema.safeParse(idParam);
    if (!parse.success) {
      return NextResponse.json(
        { ok: false, error: "INVALID_ID" },
        { status: 400 }
      );
    }

    if (!allowedIdsSet.has(idParam)) {
      return NextResponse.json(
        { ok: false, error: "FORBIDDEN" },
        { status: 403 }
      );
    }

    // 존재 체크
    const user = await prisma.user.findUnique({
      where: { id: idParam },
      select: { id: true },
    });
    if (!user) {
      return NextResponse.json(
        { ok: false, error: "USER_NOT_FOUND" },
        { status: 404 }
      );
    }

    const info = await prisma.userInfo.findUnique({
      where: { userId: idParam },
      select: userInfoSelect,
    });

    return NextResponse.json({ ok: true, data: info ?? null });
  }

  // 목록 (본인 + 산하)
  if (allowedIds.length === 0) {
    return NextResponse.json({ ok: true, data: [] });
  }

  const rows = await prisma.user.findMany({
    where: { id: { in: allowedIds } },
    select: userListSelect,
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  const data = rows.map((r) => ({
    ...r,
    createdAt: r.createdAt.toISOString(),
  }));

  return NextResponse.json({ ok: true, data });
}

// PATCH /api/admin/users/list
// - body: { userId, level }
// - 동작: "관리자 본인 또는 산하 유저"의 기존 UserInfo가 존재할 때만 level 수정
export async function PATCH(req: NextRequest) {
  const adminId = await getUserId();
  if (!adminId) {
    return NextResponse.json(
      { ok: false, error: "UNAUTHORIZED" },
      { status: 401 }
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "INVALID_JSON" },
      { status: 400 }
    );
  }

  const parsed = PatchPayloadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "INVALID_PAYLOAD" },
      { status: 400 }
    );
  }

  const { userId, level } = parsed.data;

  // 직속 산하 + 본인 허용
  const edges = await prisma.referralEdge.findMany({
    where: { parentId: adminId },
    select: { childId: true },
    take: 5_000,
  });
  const downlineIds = edges.map((e) => e.childId);
  const allowedIdsSet = new Set<string>([adminId, ...downlineIds]);

  if (!allowedIdsSet.has(userId)) {
    return NextResponse.json(
      { ok: false, error: "FORBIDDEN" },
      { status: 403 }
    );
  }

  // 사용자 및 UserInfo 존재 확인
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true },
  });
  if (!user) {
    return NextResponse.json(
      { ok: false, error: "USER_NOT_FOUND" },
      { status: 404 }
    );
  }

  const info = await prisma.userInfo.findUnique({
    where: { userId },
    select: { userId: true },
  });
  if (!info) {
    return NextResponse.json(
      { ok: false, error: "USER_INFO_NOT_FOUND" },
      { status: 404 }
    );
  }

  const updated = await prisma.userInfo.update({
    where: { userId },
    data: { level },
    select: { userId: true, level: true },
  });

  return NextResponse.json({ ok: true, data: updated });
}
