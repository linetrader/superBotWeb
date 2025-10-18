import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  trendRsiUpperPullback: SortOrderSchema.optional(),
  trendRsiLowerPullback: SortOrderSchema.optional()
}).strict();
export const TrendStrategySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TrendStrategySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategySumOrderByAggregateInput>;
export const TrendStrategySumOrderByAggregateInputObjectZodSchema = makeSchema();
