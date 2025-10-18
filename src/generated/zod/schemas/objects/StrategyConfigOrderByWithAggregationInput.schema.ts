import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StrategyConfigCountOrderByAggregateInputObjectSchema as StrategyConfigCountOrderByAggregateInputObjectSchema } from './StrategyConfigCountOrderByAggregateInput.schema';
import { StrategyConfigAvgOrderByAggregateInputObjectSchema as StrategyConfigAvgOrderByAggregateInputObjectSchema } from './StrategyConfigAvgOrderByAggregateInput.schema';
import { StrategyConfigMaxOrderByAggregateInputObjectSchema as StrategyConfigMaxOrderByAggregateInputObjectSchema } from './StrategyConfigMaxOrderByAggregateInput.schema';
import { StrategyConfigMinOrderByAggregateInputObjectSchema as StrategyConfigMinOrderByAggregateInputObjectSchema } from './StrategyConfigMinOrderByAggregateInput.schema';
import { StrategyConfigSumOrderByAggregateInputObjectSchema as StrategyConfigSumOrderByAggregateInputObjectSchema } from './StrategyConfigSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  kind: SortOrderSchema.optional(),
  useMartin: SortOrderSchema.optional(),
  martinMultiplier: SortOrderSchema.optional(),
  defaultSize: SortOrderSchema.optional(),
  maxSize: SortOrderSchema.optional(),
  targetProfit: SortOrderSchema.optional(),
  leverage: SortOrderSchema.optional(),
  timeframe: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  rsiLength: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => StrategyConfigCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => StrategyConfigAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StrategyConfigMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StrategyConfigMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => StrategyConfigSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StrategyConfigOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StrategyConfigOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigOrderByWithAggregationInput>;
export const StrategyConfigOrderByWithAggregationInputObjectZodSchema = makeSchema();
