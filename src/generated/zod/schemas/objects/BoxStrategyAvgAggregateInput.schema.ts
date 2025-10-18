import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  lowerTh: z.literal(true).optional(),
  upperTh: z.literal(true).optional(),
  boxTouchPct: z.literal(true).optional()
}).strict();
export const BoxStrategyAvgAggregateInputObjectSchema: z.ZodType<Prisma.BoxStrategyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyAvgAggregateInputType>;
export const BoxStrategyAvgAggregateInputObjectZodSchema = makeSchema();
