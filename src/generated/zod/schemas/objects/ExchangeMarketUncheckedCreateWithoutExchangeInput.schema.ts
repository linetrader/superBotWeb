import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema as TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema } from './TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInput.schema';
import { BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  name: z.string().optional().nullable(),
  restBaseUrl: z.string(),
  wsBaseUrl: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bots: z.lazy(() => TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema).optional(),
  groupExchanges: z.lazy(() => BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema).optional()
}).strict();
export const ExchangeMarketUncheckedCreateWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUncheckedCreateWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUncheckedCreateWithoutExchangeInput>;
export const ExchangeMarketUncheckedCreateWithoutExchangeInputObjectZodSchema = makeSchema();
