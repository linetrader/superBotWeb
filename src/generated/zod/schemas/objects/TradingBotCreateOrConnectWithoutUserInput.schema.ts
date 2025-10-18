import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotCreateWithoutUserInputObjectSchema as TradingBotCreateWithoutUserInputObjectSchema } from './TradingBotCreateWithoutUserInput.schema';
import { TradingBotUncheckedCreateWithoutUserInputObjectSchema as TradingBotUncheckedCreateWithoutUserInputObjectSchema } from './TradingBotUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TradingBotCreateWithoutUserInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TradingBotCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TradingBotCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateOrConnectWithoutUserInput>;
export const TradingBotCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
