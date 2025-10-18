import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './BotGroupWhereUniqueInput.schema';
import { BotGroupUpdateWithoutBotInputObjectSchema as BotGroupUpdateWithoutBotInputObjectSchema } from './BotGroupUpdateWithoutBotInput.schema';
import { BotGroupUncheckedUpdateWithoutBotInputObjectSchema as BotGroupUncheckedUpdateWithoutBotInputObjectSchema } from './BotGroupUncheckedUpdateWithoutBotInput.schema';
import { BotGroupCreateWithoutBotInputObjectSchema as BotGroupCreateWithoutBotInputObjectSchema } from './BotGroupCreateWithoutBotInput.schema';
import { BotGroupUncheckedCreateWithoutBotInputObjectSchema as BotGroupUncheckedCreateWithoutBotInputObjectSchema } from './BotGroupUncheckedCreateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BotGroupUpdateWithoutBotInputObjectSchema), z.lazy(() => BotGroupUncheckedUpdateWithoutBotInputObjectSchema)]),
  create: z.union([z.lazy(() => BotGroupCreateWithoutBotInputObjectSchema), z.lazy(() => BotGroupUncheckedCreateWithoutBotInputObjectSchema)])
}).strict();
export const BotGroupUpsertWithWhereUniqueWithoutBotInputObjectSchema: z.ZodType<Prisma.BotGroupUpsertWithWhereUniqueWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUpsertWithWhereUniqueWithoutBotInput>;
export const BotGroupUpsertWithWhereUniqueWithoutBotInputObjectZodSchema = makeSchema();
