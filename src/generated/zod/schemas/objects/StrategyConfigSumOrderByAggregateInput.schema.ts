import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  martinMultiplier: SortOrderSchema.optional(),
  defaultSize: SortOrderSchema.optional(),
  maxSize: SortOrderSchema.optional(),
  targetProfit: SortOrderSchema.optional(),
  leverage: SortOrderSchema.optional(),
  rsiLength: SortOrderSchema.optional()
}).strict();
export const StrategyConfigSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StrategyConfigSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigSumOrderByAggregateInput>;
export const StrategyConfigSumOrderByAggregateInputObjectZodSchema = makeSchema();
