import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './BotGroupWhereUniqueInput.schema';
import { BotGroupUpdateWithoutBotInputObjectSchema as BotGroupUpdateWithoutBotInputObjectSchema } from './BotGroupUpdateWithoutBotInput.schema';
import { BotGroupUncheckedUpdateWithoutBotInputObjectSchema as BotGroupUncheckedUpdateWithoutBotInputObjectSchema } from './BotGroupUncheckedUpdateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotGroupWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BotGroupUpdateWithoutBotInputObjectSchema), z.lazy(() => BotGroupUncheckedUpdateWithoutBotInputObjectSchema)])
}).strict();
export const BotGroupUpdateWithWhereUniqueWithoutBotInputObjectSchema: z.ZodType<Prisma.BotGroupUpdateWithWhereUniqueWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUpdateWithWhereUniqueWithoutBotInput>;
export const BotGroupUpdateWithWhereUniqueWithoutBotInputObjectZodSchema = makeSchema();
