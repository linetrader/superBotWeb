import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EdgeTypeSchema } from '../enums/EdgeType.schema';
import { EnumEdgeTypeFieldUpdateOperationsInputObjectSchema as EnumEdgeTypeFieldUpdateOperationsInputObjectSchema } from './EnumEdgeTypeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutDownlinesNestedInputObjectSchema as UserUpdateOneRequiredWithoutDownlinesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDownlinesNestedInput.schema';
import { UserUpdateOneRequiredWithoutUplinesNestedInputObjectSchema as UserUpdateOneRequiredWithoutUplinesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutUplinesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([EdgeTypeSchema, z.lazy(() => EnumEdgeTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  groupNo: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  parent: z.lazy(() => UserUpdateOneRequiredWithoutDownlinesNestedInputObjectSchema).optional(),
  child: z.lazy(() => UserUpdateOneRequiredWithoutUplinesNestedInputObjectSchema).optional()
}).strict();
export const ReferralEdgeUpdateInputObjectSchema: z.ZodType<Prisma.ReferralEdgeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeUpdateInput>;
export const ReferralEdgeUpdateInputObjectZodSchema = makeSchema();
