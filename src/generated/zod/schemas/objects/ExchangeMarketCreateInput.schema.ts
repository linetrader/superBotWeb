import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCreateNestedOneWithoutMarketsInputObjectSchema as ExchangeCreateNestedOneWithoutMarketsInputObjectSchema } from './ExchangeCreateNestedOneWithoutMarketsInput.schema';
import { TradingBotCreateNestedManyWithoutExchangeMarketInputObjectSchema as TradingBotCreateNestedManyWithoutExchangeMarketInputObjectSchema } from './TradingBotCreateNestedManyWithoutExchangeMarketInput.schema';
import { BotGroupExchangeCreateNestedManyWithoutExchangeMarketInputObjectSchema as BotGroupExchangeCreateNestedManyWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeCreateNestedManyWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string().max(16),
  name: z.string().max(50).optional().nullable(),
  restBaseUrl: z.string(),
  wsBaseUrl: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  exchange: z.lazy(() => ExchangeCreateNestedOneWithoutMarketsInputObjectSchema),
  bots: z.lazy(() => TradingBotCreateNestedManyWithoutExchangeMarketInputObjectSchema),
  groupExchanges: z.lazy(() => BotGroupExchangeCreateNestedManyWithoutExchangeMarketInputObjectSchema)
}).strict();
export const ExchangeMarketCreateInputObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateInput>;
export const ExchangeMarketCreateInputObjectZodSchema = makeSchema();
