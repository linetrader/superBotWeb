import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BoxStrategyCountOrderByAggregateInputObjectSchema as BoxStrategyCountOrderByAggregateInputObjectSchema } from './BoxStrategyCountOrderByAggregateInput.schema';
import { BoxStrategyAvgOrderByAggregateInputObjectSchema as BoxStrategyAvgOrderByAggregateInputObjectSchema } from './BoxStrategyAvgOrderByAggregateInput.schema';
import { BoxStrategyMaxOrderByAggregateInputObjectSchema as BoxStrategyMaxOrderByAggregateInputObjectSchema } from './BoxStrategyMaxOrderByAggregateInput.schema';
import { BoxStrategyMinOrderByAggregateInputObjectSchema as BoxStrategyMinOrderByAggregateInputObjectSchema } from './BoxStrategyMinOrderByAggregateInput.schema';
import { BoxStrategySumOrderByAggregateInputObjectSchema as BoxStrategySumOrderByAggregateInputObjectSchema } from './BoxStrategySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  strategyConfigId: SortOrderSchema.optional(),
  lowerTh: SortOrderSchema.optional(),
  upperTh: SortOrderSchema.optional(),
  boxTouchPct: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BoxStrategyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BoxStrategyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BoxStrategyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BoxStrategyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BoxStrategySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BoxStrategyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BoxStrategyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyOrderByWithAggregationInput>;
export const BoxStrategyOrderByWithAggregationInputObjectZodSchema = makeSchema();
