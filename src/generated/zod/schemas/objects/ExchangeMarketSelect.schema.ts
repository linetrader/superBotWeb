import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeArgsObjectSchema as ExchangeArgsObjectSchema } from './ExchangeArgs.schema';
import { TradingBotFindManySchema as TradingBotFindManySchema } from '../findManyTradingBot.schema';
import { BotGroupExchangeFindManySchema as BotGroupExchangeFindManySchema } from '../findManyBotGroupExchange.schema';
import { ExchangeMarketCountOutputTypeArgsObjectSchema as ExchangeMarketCountOutputTypeArgsObjectSchema } from './ExchangeMarketCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  exchangeId: z.boolean().optional(),
  exchange: z.union([z.boolean(), z.lazy(() => ExchangeArgsObjectSchema)]).optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  restBaseUrl: z.boolean().optional(),
  wsBaseUrl: z.boolean().optional(),
  active: z.boolean().optional(),
  bots: z.union([z.boolean(), z.lazy(() => TradingBotFindManySchema)]).optional(),
  groupExchanges: z.union([z.boolean(), z.lazy(() => BotGroupExchangeFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ExchangeMarketCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ExchangeMarketSelectObjectSchema: z.ZodType<Prisma.ExchangeMarketSelect> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketSelect>;
export const ExchangeMarketSelectObjectZodSchema = makeSchema();
