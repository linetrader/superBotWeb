import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  lowerTh: SortOrderSchema.optional(),
  upperTh: SortOrderSchema.optional(),
  boxTouchPct: SortOrderSchema.optional()
}).strict();
export const BoxStrategySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BoxStrategySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategySumOrderByAggregateInput>;
export const BoxStrategySumOrderByAggregateInputObjectZodSchema = makeSchema();
