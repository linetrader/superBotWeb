import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BotGroupUpdateOneRequiredWithoutExchangesNestedInputObjectSchema as BotGroupUpdateOneRequiredWithoutExchangesNestedInputObjectSchema } from './BotGroupUpdateOneRequiredWithoutExchangesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  enabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  allocationBps: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  group: z.lazy(() => BotGroupUpdateOneRequiredWithoutExchangesNestedInputObjectSchema).optional()
}).strict();
export const BotGroupExchangeUpdateWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUpdateWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateWithoutExchangeMarketInput>;
export const BotGroupExchangeUpdateWithoutExchangeMarketInputObjectZodSchema = makeSchema();
