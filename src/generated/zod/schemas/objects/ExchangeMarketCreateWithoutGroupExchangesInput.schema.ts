import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCreateNestedOneWithoutMarketsInputObjectSchema as ExchangeCreateNestedOneWithoutMarketsInputObjectSchema } from './ExchangeCreateNestedOneWithoutMarketsInput.schema';
import { TradingBotCreateNestedManyWithoutExchangeMarketInputObjectSchema as TradingBotCreateNestedManyWithoutExchangeMarketInputObjectSchema } from './TradingBotCreateNestedManyWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string().max(16),
  name: z.string().max(50).optional().nullable(),
  restBaseUrl: z.string(),
  wsBaseUrl: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  exchange: z.lazy(() => ExchangeCreateNestedOneWithoutMarketsInputObjectSchema),
  bots: z.lazy(() => TradingBotCreateNestedManyWithoutExchangeMarketInputObjectSchema).optional()
}).strict();
export const ExchangeMarketCreateWithoutGroupExchangesInputObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateWithoutGroupExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateWithoutGroupExchangesInput>;
export const ExchangeMarketCreateWithoutGroupExchangesInputObjectZodSchema = makeSchema();
