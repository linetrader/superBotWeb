import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema as TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema } from './TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInput.schema';
import { BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  exchangeId: z.string(),
  code: z.string().max(16),
  name: z.string().max(50).optional().nullable(),
  restBaseUrl: z.string(),
  wsBaseUrl: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  bots: z.lazy(() => TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema),
  groupExchanges: z.lazy(() => BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema)
}).strict();
export const ExchangeMarketUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUncheckedCreateInput>;
export const ExchangeMarketUncheckedCreateInputObjectZodSchema = makeSchema();
