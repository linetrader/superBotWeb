import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { EnumGroupKeyFieldUpdateOperationsInputObjectSchema as EnumGroupKeyFieldUpdateOperationsInputObjectSchema } from './EnumGroupKeyFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BotGroupExchangeUpdateManyWithoutGroupNestedInputObjectSchema as BotGroupExchangeUpdateManyWithoutGroupNestedInputObjectSchema } from './BotGroupExchangeUpdateManyWithoutGroupNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  key: z.union([GroupKeySchema, z.lazy(() => EnumGroupKeyFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  exchanges: z.lazy(() => BotGroupExchangeUpdateManyWithoutGroupNestedInputObjectSchema).optional()
}).strict();
export const BotGroupUpdateWithoutBotInputObjectSchema: z.ZodType<Prisma.BotGroupUpdateWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUpdateWithoutBotInput>;
export const BotGroupUpdateWithoutBotInputObjectZodSchema = makeSchema();
