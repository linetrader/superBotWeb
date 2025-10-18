import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotRuntimeWhereInputObjectSchema as BotRuntimeWhereInputObjectSchema } from './BotRuntimeWhereInput.schema';
import { BotRuntimeUpdateWithoutBotInputObjectSchema as BotRuntimeUpdateWithoutBotInputObjectSchema } from './BotRuntimeUpdateWithoutBotInput.schema';
import { BotRuntimeUncheckedUpdateWithoutBotInputObjectSchema as BotRuntimeUncheckedUpdateWithoutBotInputObjectSchema } from './BotRuntimeUncheckedUpdateWithoutBotInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BotRuntimeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BotRuntimeUpdateWithoutBotInputObjectSchema), z.lazy(() => BotRuntimeUncheckedUpdateWithoutBotInputObjectSchema)])
}).strict();
export const BotRuntimeUpdateToOneWithWhereWithoutBotInputObjectSchema: z.ZodType<Prisma.BotRuntimeUpdateToOneWithWhereWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeUpdateToOneWithWhereWithoutBotInput>;
export const BotRuntimeUpdateToOneWithWhereWithoutBotInputObjectZodSchema = makeSchema();
