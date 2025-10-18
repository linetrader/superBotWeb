import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  groupId: z.literal(true).optional(),
  exchangeMarketId: z.literal(true).optional(),
  enabled: z.literal(true).optional(),
  allocationBps: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BotGroupExchangeCountAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCountAggregateInputType>;
export const BotGroupExchangeCountAggregateInputObjectZodSchema = makeSchema();
