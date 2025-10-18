import * as z from 'zod';
export const WorkItemFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string(),
  botId: z.string().optional(),
  bot: z.unknown().optional(),
  type: z.unknown(),
  status: z.unknown(),
  dedupeKey: z.string().optional(),
  sqsMessageId: z.string().optional(),
  sqsGroupId: z.string().optional(),
  payload: z.unknown().optional(),
  attempts: z.number().int(),
  nextVisibleAt: z.date().optional(),
  runs: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});