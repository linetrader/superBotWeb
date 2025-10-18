import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateWithoutUserInputObjectSchema as TradingBotUpdateWithoutUserInputObjectSchema } from './TradingBotUpdateWithoutUserInput.schema';
import { TradingBotUncheckedUpdateWithoutUserInputObjectSchema as TradingBotUncheckedUpdateWithoutUserInputObjectSchema } from './TradingBotUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TradingBotUpdateWithoutUserInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TradingBotUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateWithWhereUniqueWithoutUserInput>;
export const TradingBotUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
