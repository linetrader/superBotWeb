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
export const TrendStrategyMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TrendStrategyMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyMinOrderByAggregateInput>;
export const TrendStrategyMinOrderByAggregateInputObjectZodSchema = makeSchema();
