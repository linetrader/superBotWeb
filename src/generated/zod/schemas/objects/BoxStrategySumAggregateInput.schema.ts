import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  lowerTh: z.literal(true).optional(),
  upperTh: z.literal(true).optional(),
  boxTouchPct: z.literal(true).optional()
}).strict();
export const BoxStrategySumAggregateInputObjectSchema: z.ZodType<Prisma.BoxStrategySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategySumAggregateInputType>;
export const BoxStrategySumAggregateInputObjectZodSchema = makeSchema();
