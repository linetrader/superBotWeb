import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TrendStrategyCountOrderByAggregateInputObjectSchema as TrendStrategyCountOrderByAggregateInputObjectSchema } from './TrendStrategyCountOrderByAggregateInput.schema';
import { TrendStrategyAvgOrderByAggregateInputObjectSchema as TrendStrategyAvgOrderByAggregateInputObjectSchema } from './TrendStrategyAvgOrderByAggregateInput.schema';
import { TrendStrategyMaxOrderByAggregateInputObjectSchema as TrendStrategyMaxOrderByAggregateInputObjectSchema } from './TrendStrategyMaxOrderByAggregateInput.schema';
import { TrendStrategyMinOrderByAggregateInputObjectSchema as TrendStrategyMinOrderByAggregateInputObjectSchema } from './TrendStrategyMinOrderByAggregateInput.schema';
import { TrendStrategySumOrderByAggregateInputObjectSchema as TrendStrategySumOrderByAggregateInputObjectSchema } from './TrendStrategySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  strategyConfigId: SortOrderSchema.optional(),
  trendRsiUpperPullback: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  trendRsiLowerPullback: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TrendStrategyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TrendStrategyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TrendStrategyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TrendStrategyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TrendStrategySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TrendStrategyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TrendStrategyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyOrderByWithAggregationInput>;
export const TrendStrategyOrderByWithAggregationInputObjectZodSchema = makeSchema();
