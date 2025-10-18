import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  strategyConfigId: z.string(),
  trendRsiUpperPullback: z.number().optional().nullable(),
  trendRsiLowerPullback: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TrendStrategyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TrendStrategyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyUncheckedCreateInput>;
export const TrendStrategyUncheckedCreateInputObjectZodSchema = makeSchema();
