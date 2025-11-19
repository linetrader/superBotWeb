// src/app/(site)/my-config/types/index.ts
import { z } from "zod";

/** POST /api/my-config 요청 바디 */
export const PostBodySchema = z.object({
  exchangeCode: z.string().min(1, "exchangeCode is required"),
  uid: z.string().min(1, "uid is required"),
  apiKey: z.string().min(1, "apiKey is required"),
  apiSecret: z.string().min(1, "apiSecret is required"),
});
export type PostBody = z.infer<typeof PostBodySchema>;

/** POST /api/my-config 응답 */
export const SaveResultSchema = z.object({
  id: z.string().min(1),
  exchangeCode: z.string().min(1),
  updatedAt: z.string().datetime({ offset: true }),
});
export type SaveResult = z.infer<typeof SaveResultSchema>;

/** GET /api/my-config 단건 아이템 */
export const HistoryItemSchema = z.object({
  id: z.string().min(1),
  exchangeCode: z.string().min(1),
  exchangeName: z.string().min(1),
  uid: z.string().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type HistoryItem = z.infer<typeof HistoryItemSchema>;

export const HistoryListSchema = z.array(HistoryItemSchema);
export type HistoryList = z.infer<typeof HistoryListSchema>;

export const DeleteBodySchema = z.object({
  exchangeCode: z.string().min(1, "exchangeCode is required"),
});
export type DeleteBody = z.infer<typeof DeleteBodySchema>;

export const DeleteResultSchema = z.object({
  id: z.string().min(1),
  exchangeCode: z.string().min(1),
  ok: z.literal(true),
});
export type DeleteResult = z.infer<typeof DeleteResultSchema>;

/** 클라이언트 폼 상태 */
export type MyConfigForm = {
  enabled: boolean;
  exchangeId: string;
  uid: string;
  apiKey: string;
  apiSecret: string;

  /** wallST 로그인용 필드 */
  wallstUsername: string;
  wallstPassword: string;
};

export type SaveHistoryItem = HistoryItem;

export type ErrorResponse = {
  error: string;
  details?: unknown;
};

/** wallST 로그인 요청 (username + password) */
export const WallstLoginRequestSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});
export type WallstLoginRequest = z.infer<typeof WallstLoginRequestSchema>;

/** wallST 로그인 결과 (토큰만 사용) */
export const WallstLoginResultSchema = z.object({
  tokenType: z.string(),
  accessToken: z.string(),
});
export type WallstLoginResult = z.infer<typeof WallstLoginResultSchema>;

/** 런타임 타입 가드 */
export function assertPostBody(data: unknown): asserts data is PostBody {
  PostBodySchema.parse(data);
}
export function assertSaveResult(data: unknown): asserts data is SaveResult {
  SaveResultSchema.parse(data);
}
export function assertHistoryList(data: unknown): asserts data is HistoryList {
  HistoryListSchema.parse(data);
}
