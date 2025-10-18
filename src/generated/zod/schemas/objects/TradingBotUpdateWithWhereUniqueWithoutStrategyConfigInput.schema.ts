import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateWithoutStrategyConfigInputObjectSchema as TradingBotUpdateWithoutStrategyConfigInputObjectSchema } from './TradingBotUpdateWithoutStrategyConfigInput.schema';
import { TradingBotUncheckedUpdateWithoutStrategyConfigInputObjectSchema as TradingBotUncheckedUpdateWithoutStrategyConfigInputObjectSchema } from './TradingBotUncheckedUpdateWithoutStrategyConfigInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TradingBotUpdateWithoutStrategyConfigInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutStrategyConfigInputObjectSchema)])
}).strict();
export const TradingBotUpdateWithWhereUniqueWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateWithWhereUniqueWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateWithWhereUniqueWithoutStrategyConfigInput>;
export const TradingBotUpdateWithWhereUniqueWithoutStrategyConfigInputObjectZodSchema = makeSchema();
