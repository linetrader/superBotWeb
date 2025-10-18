import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotCreateWithoutExchangeMarketInputObjectSchema as TradingBotCreateWithoutExchangeMarketInputObjectSchema } from './TradingBotCreateWithoutExchangeMarketInput.schema';
import { TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema as TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema } from './TradingBotUncheckedCreateWithoutExchangeMarketInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TradingBotCreateWithoutExchangeMarketInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutExchangeMarketInputObjectSchema)])
}).strict();
export const TradingBotCreateOrConnectWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.TradingBotCreateOrConnectWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateOrConnectWithoutExchangeMarketInput>;
export const TradingBotCreateOrConnectWithoutExchangeMarketInputObjectZodSchema = makeSchema();
