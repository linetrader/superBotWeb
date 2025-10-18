import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotRuntimeCreateWithoutBotInputObjectSchema as BotRuntimeCreateWithoutBotInputObjectSchema } from './BotRuntimeCreateWithoutBotInput.schema';
import { BotRuntimeUncheckedCreateWithoutBotInputObjectSchema as BotRuntimeUncheckedCreateWithoutBotInputObjectSchema } from './BotRuntimeUncheckedCreateWithoutBotInput.schema';
import { BotRuntimeCreateOrConnectWithoutBotInputObjectSchema as BotRuntimeCreateOrConnectWithoutBotInputObjectSchema } from './BotRuntimeCreateOrConnectWithoutBotInput.schema';
import { BotRuntimeWhereUniqueInputObjectSchema as BotRuntimeWhereUniqueInputObjectSchema } from './BotRuntimeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BotRuntimeCreateWithoutBotInputObjectSchema), z.lazy(() => BotRuntimeUncheckedCreateWithoutBotInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BotRuntimeCreateOrConnectWithoutBotInputObjectSchema).optional(),
  connect: z.lazy(() => BotRuntimeWhereUniqueInputObjectSchema).optional()
}).strict();
export const BotRuntimeCreateNestedOneWithoutBotInputObjectSchema: z.ZodType<Prisma.BotRuntimeCreateNestedOneWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeCreateNestedOneWithoutBotInput>;
export const BotRuntimeCreateNestedOneWithoutBotInputObjectZodSchema = makeSchema();
