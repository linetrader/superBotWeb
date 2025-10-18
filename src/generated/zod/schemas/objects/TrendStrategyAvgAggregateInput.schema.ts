import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  trendRsiUpperPullback: z.literal(true).optional(),
  trendRsiLowerPullback: z.literal(true).optional()
}).strict();
export const TrendStrategyAvgAggregateInputObjectSchema: z.ZodType<Prisma.TrendStrategyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyAvgAggregateInputType>;
export const TrendStrategyAvgAggregateInputObjectZodSchema = makeSchema();
