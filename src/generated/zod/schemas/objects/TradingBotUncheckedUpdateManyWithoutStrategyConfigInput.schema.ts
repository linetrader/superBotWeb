import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BotModeSchema } from '../enums/BotMode.schema';
import { EnumBotModeFieldUpdateOperationsInputObjectSchema as EnumBotModeFieldUpdateOperationsInputObjectSchema } from './EnumBotModeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { NullableEnumMarketKindFieldUpdateOperationsInputObjectSchema as NullableEnumMarketKindFieldUpdateOperationsInputObjectSchema } from './NullableEnumMarketKindFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(60), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mode: z.union([BotModeSchema, z.lazy(() => EnumBotModeFieldUpdateOperationsInputObjectSchema)]).optional(),
  exchangeMarketId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  singleMarketKind: z.union([MarketKindSchema, z.lazy(() => NullableEnumMarketKindFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  symbol: z.union([z.string().max(40), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  enabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TradingBotUncheckedUpdateManyWithoutStrategyConfigInputObjectSchema: z.ZodType<Prisma.TradingBotUncheckedUpdateManyWithoutStrategyConfigInput> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotUncheckedUpdateManyWithoutStrategyConfigInput>;
export const TradingBotUncheckedUpdateManyWithoutStrategyConfigInputObjectZodSchema = makeSchema();
