import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotCreateWithoutBotRuntimeInputObjectSchema as TradingBotCreateWithoutBotRuntimeInputObjectSchema } from './TradingBotCreateWithoutBotRuntimeInput.schema';
import { TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema as TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema } from './TradingBotUncheckedCreateWithoutBotRuntimeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TradingBotWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TradingBotCreateWithoutBotRuntimeInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema)])
}).strict();
export const TradingBotCreateOrConnectWithoutBotRuntimeInputObjectSchema: z.ZodType<Prisma.TradingBotCreateOrConnectWithoutBotRuntimeInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateOrConnectWithoutBotRuntimeInput>;
export const TradingBotCreateOrConnectWithoutBotRuntimeInputObjectZodSchema = makeSchema();
