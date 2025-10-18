import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema'

const makeSchema = () => z.object({
  set: BotStatusSchema.optional()
}).strict();
export const EnumBotStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumBotStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumBotStatusFieldUpdateOperationsInput>;
export const EnumBotStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
