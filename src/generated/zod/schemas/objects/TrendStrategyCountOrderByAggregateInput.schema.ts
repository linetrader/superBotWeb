import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  strategyConfigId: SortOrderSchema.optional(),
  trendRsiUpperPullback: SortOrderSchema.optional(),
  trendRsiLowerPullback: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const TrendStrategyCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TrendStrategyCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyCountOrderByAggregateInput>;
export const TrendStrategyCountOrderByAggregateInputObjectZodSchema = makeSchema();
