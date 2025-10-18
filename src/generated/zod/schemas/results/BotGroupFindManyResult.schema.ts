import * as z from 'zod';
export const BotGroupFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  botId: z.string(),
  bot: z.unknown(),
  key: z.unknown(),
  exchanges: z.array(z.unknown()),
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