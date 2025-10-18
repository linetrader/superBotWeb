import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema as TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema } from './TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  exchangeId: z.string(),
  code: z.string(),
  name: z.string().optional().nullable(),
  restBaseUrl: z.string(),
  wsBaseUrl: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bots: z.lazy(() => TradingBotUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema).optional()
}).strict();
export const ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUncheckedCreateWithoutGroupExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUncheckedCreateWithoutGroupExchangesInput>;
export const ExchangeMarketUncheckedCreateWithoutGroupExchangesInputObjectZodSchema = makeSchema();
