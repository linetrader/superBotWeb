import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema'

const makeSchema = () => z.object({
  set: BotStatusSchema.optional()
}).strict();
export const NullableEnumBotStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumBotStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumBotStatusFieldUpdateOperationsInput>;
export const NullableEnumBotStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
