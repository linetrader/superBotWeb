import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  kind: z.literal(true).optional(),
  useMartin: z.literal(true).optional(),
  martinMultiplier: z.literal(true).optional(),
  defaultSize: z.literal(true).optional(),
  maxSize: z.literal(true).optional(),
  targetProfit: z.literal(true).optional(),
  leverage: z.literal(true).optional(),
  timeframe: z.literal(true).optional(),
  enabled: z.literal(true).optional(),
  rsiLength: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const StrategyConfigMaxAggregateInputObjectSchema: z.ZodType<Prisma.StrategyConfigMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigMaxAggregateInputType>;
export const StrategyConfigMaxAggregateInputObjectZodSchema = makeSchema();
