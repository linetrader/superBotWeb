import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  martinMultiplier: z.literal(true).optional(),
  defaultSize: z.literal(true).optional(),
  maxSize: z.literal(true).optional(),
  targetProfit: z.literal(true).optional(),
  leverage: z.literal(true).optional(),
  rsiLength: z.literal(true).optional()
}).strict();
export const StrategyConfigAvgAggregateInputObjectSchema: z.ZodType<Prisma.StrategyConfigAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigAvgAggregateInputType>;
export const StrategyConfigAvgAggregateInputObjectZodSchema = makeSchema();
