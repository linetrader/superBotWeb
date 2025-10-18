import * as z from 'zod';
export const StrategyConfigFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  name: z.string(),
  kind: z.unknown(),
  useMartin: z.boolean(),
  martinMultiplier: z.number(),
  defaultSize: z.number().int(),
  maxSize: z.number().int(),
  targetProfit: z.number(),
  leverage: z.number().int(),
  timeframe: z.unknown(),
  enabled: z.boolean(),
  rsiLength: z.number().int(),
  trend: z.unknown().optional(),
  box: z.unknown().optional(),
  tradingBots: z.array(z.unknown()),
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