import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  allocationBps: z.literal(true).optional()
}).strict();
export const BotGroupExchangeSumAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeSumAggregateInputType>;
export const BotGroupExchangeSumAggregateInputObjectZodSchema = makeSchema();
