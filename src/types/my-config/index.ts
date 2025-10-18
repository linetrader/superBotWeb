// web/src/types/my-config/index.ts
import { z } from "zod";

/** POST /api/credentials 요청 바디 */
export const PostBodySchema = z.object({
  exchangeCode: z.string().min(1, "exchangeCode is required"),
  apiKey: z.string().min(1, "apiKey is required"),
  apiSecret: z.string().min(1, "apiSecret is required"),
});
export type PostBody = z.infer<typeof PostBodySchema>;

/** POST /api/credentials 응답 */
export const SaveResultSchema = z.object({
  id: z.string().min(1),
  exchangeCode: z.string().min(1),
  updatedAt: z.iso.datetime({ offset: true }),
});
export type SaveResult = z.infer<typeof SaveResultSchema>;

/** GET /api/credentials 단건 아이템 */
export const HistoryItemSchema = z.object({
  id: z.string().min(1),
  exchangeCode: z.string().min(1),
  exchangeName: z.string().min(1),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});
export type HistoryItem = z.infer<typeof HistoryItemSchema>;

/** GET /api/credentials 전체 응답 */
export const HistoryListSchema = z.array(HistoryItemSchema);
export type HistoryList = z.infer<typeof HistoryListSchema>;

/** DELETE /api/credentials 요청 바디 */
export const DeleteBodySchema = z.object({
  exchangeCode: z.string().min(1, "exchangeCode is required"),
});
export type DeleteBody = z.infer<typeof DeleteBodySchema>;

/** DELETE /api/credentials 응답 */
export const DeleteResultSchema = z.object({
  id: z.string().min(1),
  exchangeCode: z.string().min(1),
  ok: z.literal(true),
});
export type DeleteResult = z.infer<typeof DeleteResultSchema>;

/** 클라이언트 폼 상태 */
export type MyConfigForm = {
  enabled: boolean;
  /** UI에서 선택한 Exchange.id (code 아님) */
  exchangeId: string;
  apiKey: string;
  apiSecret: string;
};

/** 프론트에서 이력 타입 별칭 (서버 HistoryItem과 동일) */
export type SaveHistoryItem = HistoryItem;

/** 공통 에러 응답 타입 (any 금지) */
export type ErrorResponse = {
  error: string;
  details?: unknown;
};

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
