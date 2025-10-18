import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { LogLevelSchema } from '../enums/LogLevel.schema';
import { EnumLogLevelFieldUpdateOperationsInputObjectSchema as EnumLogLevelFieldUpdateOperationsInputObjectSchema } from './EnumLogLevelFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TradingBotUpdateOneRequiredWithoutBotLogNestedInputObjectSchema as TradingBotUpdateOneRequiredWithoutBotLogNestedInputObjectSchema } from './TradingBotUpdateOneRequiredWithoutBotLogNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  level: z.union([LogLevelSchema, z.lazy(() => EnumLogLevelFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bot: z.lazy(() => TradingBotUpdateOneRequiredWithoutBotLogNestedInputObjectSchema).optional()
}).strict();
export const BotLogUpdateInputObjectSchema: z.ZodType<Prisma.BotLogUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogUpdateInput>;
export const BotLogUpdateInputObjectZodSchema = makeSchema();
