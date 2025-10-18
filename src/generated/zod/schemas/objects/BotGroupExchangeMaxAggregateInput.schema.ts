import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  groupId: z.literal(true).optional(),
  exchangeMarketId: z.literal(true).optional(),
  enabled: z.literal(true).optional(),
  allocationBps: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const BotGroupExchangeMaxAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeMaxAggregateInputType>;
export const BotGroupExchangeMaxAggregateInputObjectZodSchema = makeSchema();
