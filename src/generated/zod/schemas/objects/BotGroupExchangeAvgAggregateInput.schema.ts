import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  allocationBps: z.literal(true).optional()
}).strict();
export const BotGroupExchangeAvgAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeAvgAggregateInputType>;
export const BotGroupExchangeAvgAggregateInputObjectZodSchema = makeSchema();
