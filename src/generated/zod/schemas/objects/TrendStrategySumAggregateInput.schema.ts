import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  trendRsiUpperPullback: z.literal(true).optional(),
  trendRsiLowerPullback: z.literal(true).optional()
}).strict();
export const TrendStrategySumAggregateInputObjectSchema: z.ZodType<Prisma.TrendStrategySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategySumAggregateInputType>;
export const TrendStrategySumAggregateInputObjectZodSchema = makeSchema();
