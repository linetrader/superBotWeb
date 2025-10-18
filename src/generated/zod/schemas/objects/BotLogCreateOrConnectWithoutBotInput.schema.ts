import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './BotLogWhereUniqueInput.schema';
import { BotLogCreateWithoutBotInputObjectSchema as BotLogCreateWithoutBotInputObjectSchema } from './BotLogCreateWithoutBotInput.schema';
import { BotLogUncheckedCreateWithoutBotInputObjectSchema as BotLogUncheckedCreateWithoutBotInputObjectSchema } from './BotLogUncheckedCreateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BotLogCreateWithoutBotInputObjectSchema), z.lazy(() => BotLogUncheckedCreateWithoutBotInputObjectSchema)])
}).strict();
export const BotLogCreateOrConnectWithoutBotInputObjectSchema: z.ZodType<Prisma.BotLogCreateOrConnectWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogCreateOrConnectWithoutBotInput>;
export const BotLogCreateOrConnectWithoutBotInputObjectZodSchema = makeSchema();
