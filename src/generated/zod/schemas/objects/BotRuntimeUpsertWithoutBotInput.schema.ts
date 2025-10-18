import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotRuntimeUpdateWithoutBotInputObjectSchema as BotRuntimeUpdateWithoutBotInputObjectSchema } from './BotRuntimeUpdateWithoutBotInput.schema';
import { BotRuntimeUncheckedUpdateWithoutBotInputObjectSchema as BotRuntimeUncheckedUpdateWithoutBotInputObjectSchema } from './BotRuntimeUncheckedUpdateWithoutBotInput.schema';
import { BotRuntimeCreateWithoutBotInputObjectSchema as BotRuntimeCreateWithoutBotInputObjectSchema } from './BotRuntimeCreateWithoutBotInput.schema';
import { BotRuntimeUncheckedCreateWithoutBotInputObjectSchema as BotRuntimeUncheckedCreateWithoutBotInputObjectSchema } from './BotRuntimeUncheckedCreateWithoutBotInput.schema';
import { BotRuntimeWhereInputObjectSchema as BotRuntimeWhereInputObjectSchema } from './BotRuntimeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BotRuntimeUpdateWithoutBotInputObjectSchema), z.lazy(() => BotRuntimeUncheckedUpdateWithoutBotInputObjectSchema)]),
  create: z.union([z.lazy(() => BotRuntimeCreateWithoutBotInputObjectSchema), z.lazy(() => BotRuntimeUncheckedCreateWithoutBotInputObjectSchema)]),
  where: z.lazy(() => BotRuntimeWhereInputObjectSchema).optional()
}).strict();
export const BotRuntimeUpsertWithoutBotInputObjectSchema: z.ZodType<Prisma.BotRuntimeUpsertWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeUpsertWithoutBotInput>;
export const BotRuntimeUpsertWithoutBotInputObjectZodSchema = makeSchema();
