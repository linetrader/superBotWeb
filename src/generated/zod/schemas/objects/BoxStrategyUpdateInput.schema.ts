import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StrategyConfigUpdateOneRequiredWithoutBoxNestedInputObjectSchema as StrategyConfigUpdateOneRequiredWithoutBoxNestedInputObjectSchema } from './StrategyConfigUpdateOneRequiredWithoutBoxNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lowerTh: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  upperTh: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  boxTouchPct: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  strategyConfig: z.lazy(() => StrategyConfigUpdateOneRequiredWithoutBoxNestedInputObjectSchema).optional()
}).strict();
export const BoxStrategyUpdateInputObjectSchema: z.ZodType<Prisma.BoxStrategyUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyUpdateInput>;
export const BoxStrategyUpdateInputObjectZodSchema = makeSchema();
