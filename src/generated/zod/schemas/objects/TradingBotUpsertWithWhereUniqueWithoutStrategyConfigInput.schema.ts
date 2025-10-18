import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateWithoutStrategyConfigInputObjectSchema as TradingBotUpdateWithoutStrategyConfigInputObjectSchema } from './TradingBotUpdateWithoutStrategyConfigInput.schema';
import { TradingBotUncheckedUpdateWithoutStrategyConfigInputObjectSchema as TradingBotUncheckedUpdateWithoutStrategyConfigInputObjectSchema } from './TradingBotUncheckedUpdateWithoutStrategyConfigInput.schema';
import { TradingBotCreateWithoutStrategyConfigInputObjectSchema as TradingBotCreateWithoutStrategyConfigInputObjectSchema } from './TradingBotCreateWithoutStrategyConfigInput.schema';
import { TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema as TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema } from './TradingBotUncheckedCreateWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TradingBotUpdateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutStrategyConfigInputObjectSchema)]),
  create: z.union([z.lazy(() => TradingBotCreateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutStrategyConfigInputObjectSchema)])
}).strict();
export const TradingBotUpsertWithWhereUniqueWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TradingBotUpsertWithWhereUniqueWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpsertWithWhereUniqueWithoutStrategyConfigInput>;
export const TradingBotUpsertWithWhereUniqueWithoutStrategyConfigInputObjectZodSchema = makeSchema();
