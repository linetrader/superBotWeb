import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  strategyConfigId: z.literal(true).optional(),
  lowerTh: z.literal(true).optional(),
  upperTh: z.literal(true).optional(),
  boxTouchPct: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const BoxStrategyMinAggregateInputObjectSchema: z.ZodType<Prisma.BoxStrategyMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyMinAggregateInputType>;
export const BoxStrategyMinAggregateInputObjectZodSchema = makeSchema();
