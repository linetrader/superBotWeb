import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupCreateWithoutBotInputObjectSchema as BotGroupCreateWithoutBotInputObjectSchema } from './BotGroupCreateWithoutBotInput.schema';
import { BotGroupUncheckedCreateWithoutBotInputObjectSchema as BotGroupUncheckedCreateWithoutBotInputObjectSchema } from './BotGroupUncheckedCreateWithoutBotInput.schema';
import { BotGroupCreateOrConnectWithoutBotInputObjectSchema as BotGroupCreateOrConnectWithoutBotInputObjectSchema } from './BotGroupCreateOrConnectWithoutBotInput.schema';
import { BotGroupCreateManyBotInputEnvelopeObjectSchema as BotGroupCreateManyBotInputEnvelopeObjectSchema } from './BotGroupCreateManyBotInputEnvelope.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './BotGroupWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotGroupCreateWithoutBotInputObjectSchema), z.lazy(() => BotGroupCreateWithoutBotInputObjectSchema).array(), z.lazy(() => BotGroupUncheckedCreateWithoutBotInputObjectSchema), z.lazy(() => BotGroupUncheckedCreateWithoutBotInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BotGroupCreateOrConnectWithoutBotInputObjectSchema), z.lazy(() => BotGroupCreateOrConnectWithoutBotInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BotGroupCreateManyBotInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BotGroupWhereUniqueInputObjectSchema), z.lazy(() => BotGroupWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BotGroupCreateNestedManyWithoutBotInputObjectSchema: z.ZodType<Prisma.BotGroupCreateNestedManyWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCreateNestedManyWithoutBotInput>;
export const BotGroupCreateNestedManyWithoutBotInputObjectZodSchema = makeSchema();
