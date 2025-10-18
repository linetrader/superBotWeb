import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ExchangeMarketUpdateManyWithoutExchangeNestedInputObjectSchema as ExchangeMarketUpdateManyWithoutExchangeNestedInputObjectSchema } from './ExchangeMarketUpdateManyWithoutExchangeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  active: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  supportsFutures: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  markets: z.lazy(() => ExchangeMarketUpdateManyWithoutExchangeNestedInputObjectSchema).optional()
}).strict();
export const ExchangeUpdateWithoutCredentialsInputObjectSchema: z.ZodType<Prisma.ExchangeUpdateWithoutCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeUpdateWithoutCredentialsInput>;
export const ExchangeUpdateWithoutCredentialsInputObjectZodSchema = makeSchema();
