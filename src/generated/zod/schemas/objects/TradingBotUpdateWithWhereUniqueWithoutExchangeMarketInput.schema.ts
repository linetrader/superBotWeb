import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateWithoutExchangeMarketInputObjectSchema as TradingBotUpdateWithoutExchangeMarketInputObjectSchema } from './TradingBotUpdateWithoutExchangeMarketInput.schema';
import { TradingBotUncheckedUpdateWithoutExchangeMarketInputObjectSchema as TradingBotUncheckedUpdateWithoutExchangeMarketInputObjectSchema } from './TradingBotUncheckedUpdateWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TradingBotUpdateWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutExchangeMarketInputObjectSchema)])
}).strict();
export const TradingBotUpdateWithWhereUniqueWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateWithWhereUniqueWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateWithWhereUniqueWithoutExchangeMarketInput>;
export const TradingBotUpdateWithWhereUniqueWithoutExchangeMarketInputObjectZodSchema = makeSchema();
