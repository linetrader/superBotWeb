import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkStatusSchema } from '../enums/WorkStatus.schema'

const makeSchema = () => z.object({
  set: WorkStatusSchema.optional()
}).strict();
export const EnumWorkStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumWorkStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumWorkStatusFieldUpdateOperationsInput>;
export const EnumWorkStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
