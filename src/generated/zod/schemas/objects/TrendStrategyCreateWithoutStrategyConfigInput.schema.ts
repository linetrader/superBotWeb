import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  trendRsiUpperPullback: z.number().optional().nullable(),
  trendRsiLowerPullback: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const TrendStrategyCreateWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TrendStrategyCreateWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyCreateWithoutStrategyConfigInput>;
export const TrendStrategyCreateWithoutStrategyConfigInputObjectZodSchema = makeSchema();
