import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { StrategyKindSchema } from '../enums/StrategyKind.schema';
import { EnumStrategyKindFieldUpdateOperationsInputObjectSchema as EnumStrategyKindFieldUpdateOperationsInputObjectSchema } from './EnumStrategyKindFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TimeframeSchema } from '../enums/Timeframe.schema';
import { EnumTimeframeFieldUpdateOperationsInputObjectSchema as EnumTimeframeFieldUpdateOperationsInputObjectSchema } from './EnumTimeframeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TrendStrategyUncheckedUpdateOneWithoutStrategyConfigNestedInputObjectSchema as TrendStrategyUncheckedUpdateOneWithoutStrategyConfigNestedInputObjectSchema } from './TrendStrategyUncheckedUpdateOneWithoutStrategyConfigNestedInput.schema';
import { BoxStrategyUncheckedUpdateOneWithoutStrategyConfigNestedInputObjectSchema as BoxStrategyUncheckedUpdateOneWithoutStrategyConfigNestedInputObjectSchema } from './BoxStrategyUncheckedUpdateOneWithoutStrategyConfigNestedInput.schema';
import { TradingBotUncheckedUpdateManyWithoutStrategyConfigNestedInputObjectSchema as TradingBotUncheckedUpdateManyWithoutStrategyConfigNestedInputObjectSchema } from './TradingBotUncheckedUpdateManyWithoutStrategyConfigNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  kind: z.union([StrategyKindSchema, z.lazy(() => EnumStrategyKindFieldUpdateOperationsInputObjectSchema)]).optional(),
  useMartin: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  martinMultiplier: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  defaultSize: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  maxSize: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  targetProfit: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  leverage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  timeframe: z.union([TimeframeSchema, z.lazy(() => EnumTimeframeFieldUpdateOperationsInputObjectSchema)]).optional(),
  enabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  rsiLength: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  trend: z.lazy(() => TrendStrategyUncheckedUpdateOneWithoutStrategyConfigNestedInputObjectSchema).optional(),
  box: z.lazy(() => BoxStrategyUncheckedUpdateOneWithoutStrategyConfigNestedInputObjectSchema).optional(),
  tradingBots: z.lazy(() => TradingBotUncheckedUpdateManyWithoutStrategyConfigNestedInputObjectSchema).optional()
}).strict();
export const StrategyConfigUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.StrategyConfigUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.StrategyConfigUncheckedUpdateInput>;
export const StrategyConfigUncheckedUpdateInputObjectZodSchema = makeSchema();
