import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ExchangeMarketUpdateOneRequiredWithoutGroupExchangesNestedInputObjectSchema as ExchangeMarketUpdateOneRequiredWithoutGroupExchangesNestedInputObjectSchema } from './ExchangeMarketUpdateOneRequiredWithoutGroupExchangesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  enabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  allocationBps: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  exchangeMarket: z.lazy(() => ExchangeMarketUpdateOneRequiredWithoutGroupExchangesNestedInputObjectSchema).optional()
}).strict();
export const BotGroupExchangeUpdateWithoutGroupInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUpdateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUpdateWithoutGroupInput>;
export const BotGroupExchangeUpdateWithoutGroupInputObjectZodSchema = makeSchema();
