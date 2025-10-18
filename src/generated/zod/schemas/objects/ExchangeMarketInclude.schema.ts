import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeArgsObjectSchema as ExchangeArgsObjectSchema } from './ExchangeArgs.schema';
import { TradingBotFindManySchema as TradingBotFindManySchema } from '../findManyTradingBot.schema';
import { BotGroupExchangeFindManySchema as BotGroupExchangeFindManySchema } from '../findManyBotGroupExchange.schema';
import { ExchangeMarketCountOutputTypeArgsObjectSchema as ExchangeMarketCountOutputTypeArgsObjectSchema } from './ExchangeMarketCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  exchange: z.union([z.boolean(), z.lazy(() => ExchangeArgsObjectSchema)]).optional(),
  bots: z.union([z.boolean(), z.lazy(() => TradingBotFindManySchema)]).optional(),
  groupExchanges: z.union([z.boolean(), z.lazy(() => BotGroupExchangeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ExchangeMarketCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ExchangeMarketIncludeObjectSchema: z.ZodType<Prisma.ExchangeMarketInclude> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketInclude>;
export const ExchangeMarketIncludeObjectZodSchema = makeSchema();
