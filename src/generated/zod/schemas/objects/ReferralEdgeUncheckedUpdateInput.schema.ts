import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EdgeTypeSchema } from '../enums/EdgeType.schema';
import { EnumEdgeTypeFieldUpdateOperationsInputObjectSchema as EnumEdgeTypeFieldUpdateOperationsInputObjectSchema } from './EnumEdgeTypeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([EdgeTypeSchema, z.lazy(() => EnumEdgeTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  parentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  childId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  groupNo: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ReferralEdgeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ReferralEdgeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeUncheckedUpdateInput>;
export const ReferralEdgeUncheckedUpdateInputObjectZodSchema = makeSchema();
