import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './BotLogWhereUniqueInput.schema';
import { BotLogUpdateWithoutBotInputObjectSchema as BotLogUpdateWithoutBotInputObjectSchema } from './BotLogUpdateWithoutBotInput.schema';
import { BotLogUncheckedUpdateWithoutBotInputObjectSchema as BotLogUncheckedUpdateWithoutBotInputObjectSchema } from './BotLogUncheckedUpdateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BotLogUpdateWithoutBotInputObjectSchema), z.lazy(() => BotLogUncheckedUpdateWithoutBotInputObjectSchema)])
}).strict();
export const BotLogUpdateWithWhereUniqueWithoutBotInputObjectSchema: z.ZodType<Prisma.BotLogUpdateWithWhereUniqueWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogUpdateWithWhereUniqueWithoutBotInput>;
export const BotLogUpdateWithWhereUniqueWithoutBotInputObjectZodSchema = makeSchema();
