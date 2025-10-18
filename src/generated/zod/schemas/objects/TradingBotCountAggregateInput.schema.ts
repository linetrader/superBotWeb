import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  mode: z.literal(true).optional(),
  exchangeMarketId: z.literal(true).optional(),
  singleMarketKind: z.literal(true).optional(),
  symbol: z.literal(true).optional(),
  strategyConfigId: z.literal(true).optional(),
  enabled: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TradingBotCountAggregateInputObjectSchema: z.ZodType<Prisma.TradingBotCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCountAggregateInputType>;
export const TradingBotCountAggregateInputObjectZodSchema = makeSchema();
