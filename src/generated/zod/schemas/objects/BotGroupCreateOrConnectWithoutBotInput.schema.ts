import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './BotGroupWhereUniqueInput.schema';
import { BotGroupCreateWithoutBotInputObjectSchema as BotGroupCreateWithoutBotInputObjectSchema } from './BotGroupCreateWithoutBotInput.schema';
import { BotGroupUncheckedCreateWithoutBotInputObjectSchema as BotGroupUncheckedCreateWithoutBotInputObjectSchema } from './BotGroupUncheckedCreateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BotGroupCreateWithoutBotInputObjectSchema), z.lazy(() => BotGroupUncheckedCreateWithoutBotInputObjectSchema)])
}).strict();
export const BotGroupCreateOrConnectWithoutBotInputObjectSchema: z.ZodType<Prisma.BotGroupCreateOrConnectWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCreateOrConnectWithoutBotInput>;
export const BotGroupCreateOrConnectWithoutBotInputObjectZodSchema = makeSchema();
