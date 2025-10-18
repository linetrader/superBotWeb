import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { NotifyStatusSchema } from '../enums/NotifyStatus.schema'

const makeSchema = () => z.object({
  set: NotifyStatusSchema.optional()
}).strict();
export const EnumNotifyStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumNotifyStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumNotifyStatusFieldUpdateOperationsInput>;
export const EnumNotifyStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
