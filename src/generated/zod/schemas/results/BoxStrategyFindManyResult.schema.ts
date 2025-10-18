import * as z from 'zod';
export const BoxStrategyFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  strategyConfigId: z.string(),
  strategyConfig: z.unknown(),
  lowerTh: z.number(),
  upperTh: z.number(),
  boxTouchPct: z.number().optional(),
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