import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { EnumGroupKeyFieldUpdateOperationsInputObjectSchema as EnumGroupKeyFieldUpdateOperationsInputObjectSchema } from './EnumGroupKeyFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TradingBotUpdateOneRequiredWithoutGroupsNestedInputObjectSchema as TradingBotUpdateOneRequiredWithoutGroupsNestedInputObjectSchema } from './TradingBotUpdateOneRequiredWithoutGroupsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([GroupKeySchema, z.lazy(() => EnumGroupKeyFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bot: z.lazy(() => TradingBotUpdateOneRequiredWithoutGroupsNestedInputObjectSchema).optional()
}).strict();
export const BotGroupUpdateWithoutExchangesInputObjectSchema: z.ZodType<Prisma.BotGroupUpdateWithoutExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUpdateWithoutExchangesInput>;
export const BotGroupUpdateWithoutExchangesInputObjectZodSchema = makeSchema();
