import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateWithoutExchangeMarketInputObjectSchema as TradingBotUpdateWithoutExchangeMarketInputObjectSchema } from './TradingBotUpdateWithoutExchangeMarketInput.schema';
import { TradingBotUncheckedUpdateWithoutExchangeMarketInputObjectSchema as TradingBotUncheckedUpdateWithoutExchangeMarketInputObjectSchema } from './TradingBotUncheckedUpdateWithoutExchangeMarketInput.schema';
import { TradingBotCreateWithoutExchangeMarketInputObjectSchema as TradingBotCreateWithoutExchangeMarketInputObjectSchema } from './TradingBotCreateWithoutExchangeMarketInput.schema';
import { TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema as TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema } from './TradingBotUncheckedCreateWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TradingBotUpdateWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutExchangeMarketInputObjectSchema)]),
  create: z.union([z.lazy(() => TradingBotCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema)])
}).strict();
export const TradingBotUpsertWithWhereUniqueWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.TradingBotUpsertWithWhereUniqueWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpsertWithWhereUniqueWithoutExchangeMarketInput>;
export const TradingBotUpsertWithWhereUniqueWithoutExchangeMarketInputObjectZodSchema = makeSchema();
