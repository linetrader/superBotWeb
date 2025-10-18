import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  strategyConfigId: SortOrderSchema.optional(),
  lowerTh: SortOrderSchema.optional(),
  upperTh: SortOrderSchema.optional(),
  boxTouchPct: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const BoxStrategyMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BoxStrategyMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyMaxOrderByAggregateInput>;
export const BoxStrategyMaxOrderByAggregateInputObjectZodSchema = makeSchema();
