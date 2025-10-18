import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StrategyConfigUpdateOneRequiredWithoutTrendNestedInputObjectSchema as StrategyConfigUpdateOneRequiredWithoutTrendNestedInputObjectSchema } from './StrategyConfigUpdateOneRequiredWithoutTrendNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  trendRsiUpperPullback: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  trendRsiLowerPullback: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  strategyConfig: z.lazy(() => StrategyConfigUpdateOneRequiredWithoutTrendNestedInputObjectSchema).optional()
}).strict();
export const TrendStrategyUpdateInputObjectSchema: z.ZodType<Prisma.TrendStrategyUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyUpdateInput>;
export const TrendStrategyUpdateInputObjectZodSchema = makeSchema();
