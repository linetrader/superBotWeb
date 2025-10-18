import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutBotRuntimeInputObjectSchema as TradingBotCreateWithoutBotRuntimeInputObjectSchema } from './TradingBotCreateWithoutBotRuntimeInput.schema';
import { TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema as TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema } from './TradingBotUncheckedCreateWithoutBotRuntimeInput.schema';
import { TradingBotCreateOrConnectWithoutBotRuntimeInputObjectSchema as TradingBotCreateOrConnectWithoutBotRuntimeInputObjectSchema } from './TradingBotCreateOrConnectWithoutBotRuntimeInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutBotRuntimeInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutBotRuntimeInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TradingBotCreateOrConnectWithoutBotRuntimeInputObjectSchema).optional(),
  connect: z.lazy(() => TradingBotWhereUniqueInputObjectSchema).optional()
}).strict();
export const TradingBotCreateNestedOneWithoutBotRuntimeInputObjectSchema: z.ZodType<Prisma.TradingBotCreateNestedOneWithoutBotRuntimeInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateNestedOneWithoutBotRuntimeInput>;
export const TradingBotCreateNestedOneWithoutBotRuntimeInputObjectZodSchema = makeSchema();
