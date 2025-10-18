import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotCreateWithoutStrategyConfigInputObjectSchema as TradingBotCreateWithoutStrategyConfigInputObjectSchema } from './TradingBotCreateWithoutStrategyConfigInput.schema';
import { TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema as TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './TradingBotUncheckedCreateWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TradingBotCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema)])
}).strict();
export const TradingBotCreateOrConnectWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TradingBotCreateOrConnectWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateOrConnectWithoutStrategyConfigInput>;
export const TradingBotCreateOrConnectWithoutStrategyConfigInputObjectZodSchema = makeSchema();
