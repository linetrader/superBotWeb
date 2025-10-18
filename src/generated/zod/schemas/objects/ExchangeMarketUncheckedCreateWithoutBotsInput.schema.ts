import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema as BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema } from './BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInput.schema'

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
  groupExchanges: z.lazy(() => BotGroupExchangeUncheckedCreateNestedManyWithoutExchangeMarketInputObjectSchema).optional()
}).strict();
export const ExchangeMarketUncheckedCreateWithoutBotsInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUncheckedCreateWithoutBotsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUncheckedCreateWithoutBotsInput>;
export const ExchangeMarketUncheckedCreateWithoutBotsInputObjectZodSchema = makeSchema();
