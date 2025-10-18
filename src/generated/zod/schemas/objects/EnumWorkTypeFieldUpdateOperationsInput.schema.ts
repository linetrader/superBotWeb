import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkTypeSchema } from '../enums/WorkType.schema'

const makeSchema = () => z.object({
  set: WorkTypeSchema.optional()
}).strict();
export const EnumWorkTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumWorkTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumWorkTypeFieldUpdateOperationsInput>;
export const EnumWorkTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
