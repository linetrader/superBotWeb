import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupArgsObjectSchema as BotGroupArgsObjectSchema } from './BotGroupArgs.schema';
import { ExchangeMarketArgsObjectSchema as ExchangeMarketArgsObjectSchema } from './ExchangeMarketArgs.schema'

const makeSchema = () => z.object({
  group: z.union([z.boolean(), z.lazy(() => BotGroupArgsObjectSchema)]).optional(),
  exchangeMarket: z.union([z.boolean(), z.lazy(() => ExchangeMarketArgsObjectSchema)]).optional()
}).strict();
export const BotGroupExchangeIncludeObjectSchema: z.ZodType<Prisma.BotGroupExchangeInclude> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeInclude>;
export const BotGroupExchangeIncludeObjectZodSchema = makeSchema();
