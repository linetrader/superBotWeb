import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotRuntimeWhereUniqueInputObjectSchema as BotRuntimeWhereUniqueInputObjectSchema } from './BotRuntimeWhereUniqueInput.schema';
import { BotRuntimeCreateWithoutBotInputObjectSchema as BotRuntimeCreateWithoutBotInputObjectSchema } from './BotRuntimeCreateWithoutBotInput.schema';
import { BotRuntimeUncheckedCreateWithoutBotInputObjectSchema as BotRuntimeUncheckedCreateWithoutBotInputObjectSchema } from './BotRuntimeUncheckedCreateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotRuntimeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BotRuntimeCreateWithoutBotInputObjectSchema), z.lazy(() => BotRuntimeUncheckedCreateWithoutBotInputObjectSchema)])
}).strict();
export const BotRuntimeCreateOrConnectWithoutBotInputObjectSchema: z.ZodType<Prisma.BotRuntimeCreateOrConnectWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeCreateOrConnectWithoutBotInput>;
export const BotRuntimeCreateOrConnectWithoutBotInputObjectZodSchema = makeSchema();
