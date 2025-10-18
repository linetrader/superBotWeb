import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  trendRsiUpperPullback: SortOrderSchema.optional(),
  trendRsiLowerPullback: SortOrderSchema.optional()
}).strict();
export const TrendStrategyAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TrendStrategyAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyAvgOrderByAggregateInput>;
export const TrendStrategyAvgOrderByAggregateInputObjectZodSchema = makeSchema();
