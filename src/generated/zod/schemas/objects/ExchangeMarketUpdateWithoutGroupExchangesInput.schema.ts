import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ExchangeUpdateOneRequiredWithoutMarketsNestedInputObjectSchema as ExchangeUpdateOneRequiredWithoutMarketsNestedInputObjectSchema } from './ExchangeUpdateOneRequiredWithoutMarketsNestedInput.schema';
import { TradingBotUpdateManyWithoutExchangeMarketNestedInputObjectSchema as TradingBotUpdateManyWithoutExchangeMarketNestedInputObjectSchema } from './TradingBotUpdateManyWithoutExchangeMarketNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string().max(16), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  restBaseUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  wsBaseUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  active: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  exchange: z.lazy(() => ExchangeUpdateOneRequiredWithoutMarketsNestedInputObjectSchema).optional(),
  bots: z.lazy(() => TradingBotUpdateManyWithoutExchangeMarketNestedInputObjectSchema).optional()
}).strict();
export const ExchangeMarketUpdateWithoutGroupExchangesInputObjectSchema: z.ZodType<Prisma.ExchangeMarketUpdateWithoutGroupExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketUpdateWithoutGroupExchangesInput>;
export const ExchangeMarketUpdateWithoutGroupExchangesInputObjectZodSchema = makeSchema();
