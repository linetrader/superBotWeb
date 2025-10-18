import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  strategyConfigId: z.literal(true).optional(),
  trendRsiUpperPullback: z.literal(true).optional(),
  trendRsiLowerPullback: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const TrendStrategyMaxAggregateInputObjectSchema: z.ZodType<Prisma.TrendStrategyMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyMaxAggregateInputType>;
export const TrendStrategyMaxAggregateInputObjectZodSchema = makeSchema();
