import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TimeframeSchema } from '../enums/Timeframe.schema'

const makeSchema = () => z.object({
  set: TimeframeSchema.optional()
}).strict();
export const EnumTimeframeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTimeframeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumTimeframeFieldUpdateOperationsInput>;
export const EnumTimeframeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
