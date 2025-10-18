import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

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
  updatedAt: SortOrderSchema.optional()
}).strict();
export const StrategyConfigMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StrategyConfigMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigMinOrderByAggregateInput>;
export const StrategyConfigMinOrderByAggregateInputObjectZodSchema = makeSchema();
