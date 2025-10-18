import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  strategyConfigId: z.string(),
  trendRsiUpperPullback: z.number().optional().nullable(),
  trendRsiLowerPullback: z.number().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const TrendStrategyCreateManyInputObjectSchema: z.ZodType<Prisma.TrendStrategyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyCreateManyInput>;
export const TrendStrategyCreateManyInputObjectZodSchema = makeSchema();
