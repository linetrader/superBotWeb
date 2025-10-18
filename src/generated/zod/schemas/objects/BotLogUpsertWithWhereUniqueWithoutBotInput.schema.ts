import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './BotLogWhereUniqueInput.schema';
import { BotLogUpdateWithoutBotInputObjectSchema as BotLogUpdateWithoutBotInputObjectSchema } from './BotLogUpdateWithoutBotInput.schema';
import { BotLogUncheckedUpdateWithoutBotInputObjectSchema as BotLogUncheckedUpdateWithoutBotInputObjectSchema } from './BotLogUncheckedUpdateWithoutBotInput.schema';
import { BotLogCreateWithoutBotInputObjectSchema as BotLogCreateWithoutBotInputObjectSchema } from './BotLogCreateWithoutBotInput.schema';
import { BotLogUncheckedCreateWithoutBotInputObjectSchema as BotLogUncheckedCreateWithoutBotInputObjectSchema } from './BotLogUncheckedCreateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BotLogUpdateWithoutBotInputObjectSchema), z.lazy(() => BotLogUncheckedUpdateWithoutBotInputObjectSchema)]),
  create: z.union([z.lazy(() => BotLogCreateWithoutBotInputObjectSchema), z.lazy(() => BotLogUncheckedCreateWithoutBotInputObjectSchema)])
}).strict();
export const BotLogUpsertWithWhereUniqueWithoutBotInputObjectSchema: z.ZodType<Prisma.BotLogUpsertWithWhereUniqueWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogUpsertWithWhereUniqueWithoutBotInput>;
export const BotLogUpsertWithWhereUniqueWithoutBotInputObjectZodSchema = makeSchema();
