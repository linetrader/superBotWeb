import * as z from 'zod';
import type { Prisma } from '../../../prisma';
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
  updatedAt: z.coerce.date().optional(),
  bots: z.lazy(() => TradingBotCreateNestedManyWithoutExchangeMarketInputObjectSchema).optional(),
  groupExchanges: z.lazy(() => BotGroupExchangeCreateNestedManyWithoutExchangeMarketInputObjectSchema).optional()
}).strict();
export const ExchangeMarketCreateWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateWithoutExchangeInput>;
export const ExchangeMarketCreateWithoutExchangeInputObjectZodSchema = makeSchema();
