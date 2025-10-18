import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { EdgeTypeSchema } from '../enums/EdgeType.schema'

const makeSchema = () => z.object({
  set: EdgeTypeSchema.optional()
}).strict();
export const EnumEdgeTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumEdgeTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumEdgeTypeFieldUpdateOperationsInput>;
export const EnumEdgeTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
