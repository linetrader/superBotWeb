// 런타임 검증 및 가드 (Zod)
// 폴더명은 요구사항에 맞춰 "gaurd"

import { z } from "zod";
import type {
  DetailApiResponse,
  ListApiResponse,
  UpdateLevelPayload,
  UpdateLevelResponse,
  UserInfoDetail,
  UserRow,
} from "../types";

export const UserRowSchema = z.object({
  id: z.string().min(1),
  username: z.string().min(1),
  email: z.string().min(1),
  name: z.string().min(1),
  countryCode: z.string().length(2).nullable(),
  createdAt: z.string().datetime(),
});

export const ListApiOkSchema = z.object({
  ok: z.literal(true),
  data: z.array(UserRowSchema),
});

export const ListApiErrSchema = z.object({
  ok: z.literal(false),
  error: z.string(),
});

export const ListApiResponseSchema = z.union([
  ListApiOkSchema,
  ListApiErrSchema,
]);

export const UserInfoDetailSchema = z.object({
  id: z.string().min(1),
  userId: z.string().min(1),
  referralCode: z.string().min(1),
  level: z.number().int().nonnegative(),
  googleOtpEnabled: z.boolean(),
  googleOtpSecret: z.string().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const DetailApiOkSchema = z.object({
  ok: z.literal(true),
  data: UserInfoDetailSchema.nullable(),
});

export const DetailApiErrSchema = z.object({
  ok: z.literal(false),
  error: z.string(),
});

export const DetailApiResponseSchema = z.union([
  DetailApiOkSchema,
  DetailApiErrSchema,
]);

// Update Level
export const UpdateLevelPayloadSchema = z.object({
  userId: z.string().min(1),
  level: z.number().int().min(1),
});

export const UpdateLevelOkSchema = z.object({
  ok: z.literal(true),
  data: z.object({
    userId: z.string().min(1),
    level: z.number().int().min(1),
  }),
});

export const UpdateLevelErrSchema = z.object({
  ok: z.literal(false),
  error: z.string(),
});

export const UpdateLevelResponseSchema = z.union([
  UpdateLevelOkSchema,
  UpdateLevelErrSchema,
]);

export function parseListResponse(json: unknown): ListApiResponse {
  const parsed = ListApiResponseSchema.safeParse(json);
  if (!parsed.success) return { ok: false, error: "INVALID_RESPONSE" };
  return parsed.data;
}

export function parseDetailResponse(json: unknown): DetailApiResponse {
  const parsed = DetailApiResponseSchema.safeParse(json);
  if (!parsed.success) return { ok: false, error: "INVALID_RESPONSE" };
  return parsed.data;
}

export function parseUpdateLevelResponse(json: unknown): UpdateLevelResponse {
  const parsed = UpdateLevelResponseSchema.safeParse(json);
  if (!parsed.success) return { ok: false, error: "INVALID_RESPONSE" };
  return parsed.data;
}

export function isUserRow(x: unknown): x is UserRow {
  return UserRowSchema.safeParse(x).success;
}

export function isUserInfoDetail(x: unknown): x is UserInfoDetail {
  return UserInfoDetailSchema.safeParse(x).success;
}

export function toUpdateLevelPayload(
  userId: string,
  level: number
): UpdateLevelPayload {
  const payload = { userId, level };
  const ok = UpdateLevelPayloadSchema.safeParse(payload);
  if (!ok.success) {
    throw new Error("INVALID_PAYLOAD");
  }
  return payload;
}
