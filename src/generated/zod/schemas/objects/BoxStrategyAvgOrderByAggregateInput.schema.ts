import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  lowerTh: SortOrderSchema.optional(),
  upperTh: SortOrderSchema.optional(),
  boxTouchPct: SortOrderSchema.optional()
}).strict();
export const BoxStrategyAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BoxStrategyAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyAvgOrderByAggregateInput>;
export const BoxStrategyAvgOrderByAggregateInputObjectZodSchema = makeSchema();
