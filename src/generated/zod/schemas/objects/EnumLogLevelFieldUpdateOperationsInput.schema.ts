import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { LogLevelSchema } from '../enums/LogLevel.schema'

const makeSchema = () => z.object({
  set: LogLevelSchema.optional()
}).strict();
export const EnumLogLevelFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumLogLevelFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumLogLevelFieldUpdateOperationsInput>;
export const EnumLogLevelFieldUpdateOperationsInputObjectZodSchema = makeSchema();
