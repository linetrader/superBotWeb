import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotModeSchema } from '../enums/BotMode.schema'

const makeSchema = () => z.object({
  set: BotModeSchema.optional()
}).strict();
export const EnumBotModeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumBotModeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumBotModeFieldUpdateOperationsInput>;
export const EnumBotModeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
