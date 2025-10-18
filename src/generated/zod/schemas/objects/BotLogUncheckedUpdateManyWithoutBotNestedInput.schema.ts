import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotLogCreateWithoutBotInputObjectSchema as BotLogCreateWithoutBotInputObjectSchema } from './BotLogCreateWithoutBotInput.schema';
import { BotLogUncheckedCreateWithoutBotInputObjectSchema as BotLogUncheckedCreateWithoutBotInputObjectSchema } from './BotLogUncheckedCreateWithoutBotInput.schema';
import { BotLogCreateOrConnectWithoutBotInputObjectSchema as BotLogCreateOrConnectWithoutBotInputObjectSchema } from './BotLogCreateOrConnectWithoutBotInput.schema';
import { BotLogUpsertWithWhereUniqueWithoutBotInputObjectSchema as BotLogUpsertWithWhereUniqueWithoutBotInputObjectSchema } from './BotLogUpsertWithWhereUniqueWithoutBotInput.schema';
import { BotLogCreateManyBotInputEnvelopeObjectSchema as BotLogCreateManyBotInputEnvelopeObjectSchema } from './BotLogCreateManyBotInputEnvelope.schema';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './BotLogWhereUniqueInput.schema';
import { BotLogUpdateWithWhereUniqueWithoutBotInputObjectSchema as BotLogUpdateWithWhereUniqueWithoutBotInputObjectSchema } from './BotLogUpdateWithWhereUniqueWithoutBotInput.schema';
import { BotLogUpdateManyWithWhereWithoutBotInputObjectSchema as BotLogUpdateManyWithWhereWithoutBotInputObjectSchema } from './BotLogUpdateManyWithWhereWithoutBotInput.schema';
import { BotLogScalarWhereInputObjectSchema as BotLogScalarWhereInputObjectSchema } from './BotLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotLogCreateWithoutBotInputObjectSchema), z.lazy(() => BotLogCreateWithoutBotInputObjectSchema).array(), z.lazy(() => BotLogUncheckedCreateWithoutBotInputObjectSchema), z.lazy(() => BotLogUncheckedCreateWithoutBotInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BotLogCreateOrConnectWithoutBotInputObjectSchema), z.lazy(() => BotLogCreateOrConnectWithoutBotInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BotLogUpsertWithWhereUniqueWithoutBotInputObjectSchema), z.lazy(() => BotLogUpsertWithWhereUniqueWithoutBotInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BotLogCreateManyBotInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BotLogWhereUniqueInputObjectSchema), z.lazy(() => BotLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BotLogWhereUniqueInputObjectSchema), z.lazy(() => BotLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BotLogWhereUniqueInputObjectSchema), z.lazy(() => BotLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BotLogWhereUniqueInputObjectSchema), z.lazy(() => BotLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BotLogUpdateWithWhereUniqueWithoutBotInputObjectSchema), z.lazy(() => BotLogUpdateWithWhereUniqueWithoutBotInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BotLogUpdateManyWithWhereWithoutBotInputObjectSchema), z.lazy(() => BotLogUpdateManyWithWhereWithoutBotInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BotLogScalarWhereInputObjectSchema), z.lazy(() => BotLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BotLogUncheckedUpdateManyWithoutBotNestedInputObjectSchema: z.ZodType<Prisma.BotLogUncheckedUpdateManyWithoutBotNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogUncheckedUpdateManyWithoutBotNestedInput>;
export const BotLogUncheckedUpdateManyWithoutBotNestedInputObjectZodSchema = makeSchema();
