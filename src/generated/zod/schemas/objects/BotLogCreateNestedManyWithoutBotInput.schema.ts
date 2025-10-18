import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotLogCreateWithoutBotInputObjectSchema as BotLogCreateWithoutBotInputObjectSchema } from './BotLogCreateWithoutBotInput.schema';
import { BotLogUncheckedCreateWithoutBotInputObjectSchema as BotLogUncheckedCreateWithoutBotInputObjectSchema } from './BotLogUncheckedCreateWithoutBotInput.schema';
import { BotLogCreateOrConnectWithoutBotInputObjectSchema as BotLogCreateOrConnectWithoutBotInputObjectSchema } from './BotLogCreateOrConnectWithoutBotInput.schema';
import { BotLogCreateManyBotInputEnvelopeObjectSchema as BotLogCreateManyBotInputEnvelopeObjectSchema } from './BotLogCreateManyBotInputEnvelope.schema';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './BotLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotLogCreateWithoutBotInputObjectSchema), z.lazy(() => BotLogCreateWithoutBotInputObjectSchema).array(), z.lazy(() => BotLogUncheckedCreateWithoutBotInputObjectSchema), z.lazy(() => BotLogUncheckedCreateWithoutBotInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BotLogCreateOrConnectWithoutBotInputObjectSchema), z.lazy(() => BotLogCreateOrConnectWithoutBotInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BotLogCreateManyBotInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BotLogWhereUniqueInputObjectSchema), z.lazy(() => BotLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BotLogCreateNestedManyWithoutBotInputObjectSchema: z.ZodType<Prisma.BotLogCreateNestedManyWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogCreateNestedManyWithoutBotInput>;
export const BotLogCreateNestedManyWithoutBotInputObjectZodSchema = makeSchema();
