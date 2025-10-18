import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema'

const makeSchema = () => z.object({
  set: GroupKeySchema.optional()
}).strict();
export const EnumGroupKeyFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumGroupKeyFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumGroupKeyFieldUpdateOperationsInput>;
export const EnumGroupKeyFieldUpdateOperationsInputObjectZodSchema = makeSchema();
