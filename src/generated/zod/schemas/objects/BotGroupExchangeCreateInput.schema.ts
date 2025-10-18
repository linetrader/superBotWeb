import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupCreateNestedOneWithoutExchangesInputObjectSchema as BotGroupCreateNestedOneWithoutExchangesInputObjectSchema } from './BotGroupCreateNestedOneWithoutExchangesInput.schema';
import { ExchangeMarketCreateNestedOneWithoutGroupExchangesInputObjectSchema as ExchangeMarketCreateNestedOneWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketCreateNestedOneWithoutGroupExchangesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  enabled: z.boolean().optional(),
  allocationBps: z.number().int(),
  createdAt: z.coerce.date().optional(),
  group: z.lazy(() => BotGroupCreateNestedOneWithoutExchangesInputObjectSchema),
  exchangeMarket: z.lazy(() => ExchangeMarketCreateNestedOneWithoutGroupExchangesInputObjectSchema)
}).strict();
export const BotGroupExchangeCreateInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateInput>;
export const BotGroupExchangeCreateInputObjectZodSchema = makeSchema();
