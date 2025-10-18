import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutUserInputObjectSchema as TradingBotCreateWithoutUserInputObjectSchema } from './TradingBotCreateWithoutUserInput.schema';
import { TradingBotUncheckedCreateWithoutUserInputObjectSchema as TradingBotUncheckedCreateWithoutUserInputObjectSchema } from './TradingBotUncheckedCreateWithoutUserInput.schema';
import { TradingBotCreateOrConnectWithoutUserInputObjectSchema as TradingBotCreateOrConnectWithoutUserInputObjectSchema } from './TradingBotCreateOrConnectWithoutUserInput.schema';
import { TradingBotCreateManyUserInputEnvelopeObjectSchema as TradingBotCreateManyUserInputEnvelopeObjectSchema } from './TradingBotCreateManyUserInputEnvelope.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutUserInputObjectSchema), z.lazy(() => TradingBotCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TradingBotUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TradingBotCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TradingBotCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TradingBotCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TradingBotUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TradingBotUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUncheckedCreateNestedManyWithoutUserInput>;
export const TradingBotUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
