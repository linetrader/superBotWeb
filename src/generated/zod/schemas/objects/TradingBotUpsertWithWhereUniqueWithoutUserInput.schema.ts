import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateWithoutUserInputObjectSchema as TradingBotUpdateWithoutUserInputObjectSchema } from './TradingBotUpdateWithoutUserInput.schema';
import { TradingBotUncheckedUpdateWithoutUserInputObjectSchema as TradingBotUncheckedUpdateWithoutUserInputObjectSchema } from './TradingBotUncheckedUpdateWithoutUserInput.schema';
import { TradingBotCreateWithoutUserInputObjectSchema as TradingBotCreateWithoutUserInputObjectSchema } from './TradingBotCreateWithoutUserInput.schema';
import { TradingBotUncheckedCreateWithoutUserInputObjectSchema as TradingBotUncheckedCreateWithoutUserInputObjectSchema } from './TradingBotUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TradingBotUpdateWithoutUserInputObjectSchema), z.lazy(() => TradingBotUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TradingBotCreateWithoutUserInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TradingBotUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TradingBotUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpsertWithWhereUniqueWithoutUserInput>;
export const TradingBotUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
