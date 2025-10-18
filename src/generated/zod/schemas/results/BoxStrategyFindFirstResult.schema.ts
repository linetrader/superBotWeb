import * as z from 'zod';
export const BoxStrategyFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  strategyConfigId: z.string(),
  strategyConfig: z.unknown(),
  lowerTh: z.number(),
  upperTh: z.number(),
  boxTouchPct: z.number().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));