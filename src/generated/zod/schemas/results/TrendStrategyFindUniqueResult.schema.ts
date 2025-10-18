import * as z from 'zod';
export const TrendStrategyFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  strategyConfigId: z.string(),
  strategyConfig: z.unknown(),
  trendRsiUpperPullback: z.number().optional(),
  trendRsiLowerPullback: z.number().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));