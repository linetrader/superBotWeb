import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupCreateWithoutBotInputObjectSchema as BotGroupCreateWithoutBotInputObjectSchema } from './BotGroupCreateWithoutBotInput.schema';
import { BotGroupUncheckedCreateWithoutBotInputObjectSchema as BotGroupUncheckedCreateWithoutBotInputObjectSchema } from './BotGroupUncheckedCreateWithoutBotInput.schema';
import { BotGroupCreateOrConnectWithoutBotInputObjectSchema as BotGroupCreateOrConnectWithoutBotInputObjectSchema } from './BotGroupCreateOrConnectWithoutBotInput.schema';
import { BotGroupUpsertWithWhereUniqueWithoutBotInputObjectSchema as BotGroupUpsertWithWhereUniqueWithoutBotInputObjectSchema } from './BotGroupUpsertWithWhereUniqueWithoutBotInput.schema';
import { BotGroupCreateManyBotInputEnvelopeObjectSchema as BotGroupCreateManyBotInputEnvelopeObjectSchema } from './BotGroupCreateManyBotInputEnvelope.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './BotGroupWhereUniqueInput.schema';
import { BotGroupUpdateWithWhereUniqueWithoutBotInputObjectSchema as BotGroupUpdateWithWhereUniqueWithoutBotInputObjectSchema } from './BotGroupUpdateWithWhereUniqueWithoutBotInput.schema';
import { BotGroupUpdateManyWithWhereWithoutBotInputObjectSchema as BotGroupUpdateManyWithWhereWithoutBotInputObjectSchema } from './BotGroupUpdateManyWithWhereWithoutBotInput.schema';
import { BotGroupScalarWhereInputObjectSchema as BotGroupScalarWhereInputObjectSchema } from './BotGroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotGroupCreateWithoutBotInputObjectSchema), z.lazy(() => BotGroupCreateWithoutBotInputObjectSchema).array(), z.lazy(() => BotGroupUncheckedCreateWithoutBotInputObjectSchema), z.lazy(() => BotGroupUncheckedCreateWithoutBotInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BotGroupCreateOrConnectWithoutBotInputObjectSchema), z.lazy(() => BotGroupCreateOrConnectWithoutBotInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BotGroupUpsertWithWhereUniqueWithoutBotInputObjectSchema), z.lazy(() => BotGroupUpsertWithWhereUniqueWithoutBotInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BotGroupCreateManyBotInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BotGroupWhereUniqueInputObjectSchema), z.lazy(() => BotGroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BotGroupWhereUniqueInputObjectSchema), z.lazy(() => BotGroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BotGroupWhereUniqueInputObjectSchema), z.lazy(() => BotGroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BotGroupWhereUniqueInputObjectSchema), z.lazy(() => BotGroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BotGroupUpdateWithWhereUniqueWithoutBotInputObjectSchema), z.lazy(() => BotGroupUpdateWithWhereUniqueWithoutBotInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BotGroupUpdateManyWithWhereWithoutBotInputObjectSchema), z.lazy(() => BotGroupUpdateManyWithWhereWithoutBotInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BotGroupScalarWhereInputObjectSchema), z.lazy(() => BotGroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BotGroupUpdateManyWithoutBotNestedInputObjectSchema: z.ZodType<Prisma.BotGroupUpdateManyWithoutBotNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUpdateManyWithoutBotNestedInput>;
export const BotGroupUpdateManyWithoutBotNestedInputObjectZodSchema = makeSchema();
