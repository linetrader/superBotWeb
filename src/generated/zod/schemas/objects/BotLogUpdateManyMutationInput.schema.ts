import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LogLevelSchema } from '../enums/LogLevel.schema';
import { EnumLogLevelFieldUpdateOperationsInputObjectSchema as EnumLogLevelFieldUpdateOperationsInputObjectSchema } from './EnumLogLevelFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  level: z.union([LogLevelSchema, z.lazy(() => EnumLogLevelFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const BotLogUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.BotLogUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogUpdateManyMutationInput>;
export const BotLogUpdateManyMutationInputObjectZodSchema = makeSchema();
