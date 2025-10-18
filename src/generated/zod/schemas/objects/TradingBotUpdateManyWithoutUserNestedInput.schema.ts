import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateWithoutUserInputObjectSchema as TradingBotCreateWithoutUserInputObjectSchema } from './TradingBotCreateWithoutUserInput.schema';
import { TradingBotUncheckedCreateWithoutUserInputObjectSchema as TradingBotUncheckedCreateWithoutUserInputObjectSchema } from './TradingBotUncheckedCreateWithoutUserInput.schema';
import { TradingBotCreateOrConnectWithoutUserInputObjectSchema as TradingBotCreateOrConnectWithoutUserInputObjectSchema } from './TradingBotCreateOrConnectWithoutUserInput.schema';
import { TradingBotUpsertWithWhereUniqueWithoutUserInputObjectSchema as TradingBotUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TradingBotUpsertWithWhereUniqueWithoutUserInput.schema';
import { TradingBotCreateManyUserInputEnvelopeObjectSchema as TradingBotCreateManyUserInputEnvelopeObjectSchema } from './TradingBotCreateManyUserInputEnvelope.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './TradingBotWhereUniqueInput.schema';
import { TradingBotUpdateWithWhereUniqueWithoutUserInputObjectSchema as TradingBotUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TradingBotUpdateWithWhereUniqueWithoutUserInput.schema';
import { TradingBotUpdateManyWithWhereWithoutUserInputObjectSchema as TradingBotUpdateManyWithWhereWithoutUserInputObjectSchema } from './TradingBotUpdateManyWithWhereWithoutUserInput.schema';
import { TradingBotScalarWhereInputObjectSchema as TradingBotScalarWhereInputObjectSchema } from './TradingBotScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TradingBotCreateWithoutUserInputObjectSchema), z.lazy(() => TradingBotCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TradingBotUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TradingBotUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TradingBotCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TradingBotCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TradingBotUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TradingBotUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TradingBotCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TradingBotWhereUniqueInputObjectSchema), z.lazy(() => TradingBotWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TradingBotUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TradingBotUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TradingBotUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => TradingBotUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TradingBotScalarWhereInputObjectSchema), z.lazy(() => TradingBotScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TradingBotUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TradingBotUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUpdateManyWithoutUserNestedInput>;
export const TradingBotUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
