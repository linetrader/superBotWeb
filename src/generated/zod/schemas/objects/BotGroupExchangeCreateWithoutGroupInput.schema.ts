import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCreateNestedOneWithoutGroupExchangesInputObjectSchema as ExchangeMarketCreateNestedOneWithoutGroupExchangesInputObjectSchema } from './ExchangeMarketCreateNestedOneWithoutGroupExchangesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  enabled: z.boolean().optional(),
  allocationBps: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  exchangeMarket: z.lazy(() => ExchangeMarketCreateNestedOneWithoutGroupExchangesInputObjectSchema)
}).strict();
export const BotGroupExchangeCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateWithoutGroupInput>;
export const BotGroupExchangeCreateWithoutGroupInputObjectZodSchema = makeSchema();
