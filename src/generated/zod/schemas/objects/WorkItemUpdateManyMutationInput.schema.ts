import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { WorkTypeSchema } from '../enums/WorkType.schema';
import { EnumWorkTypeFieldUpdateOperationsInputObjectSchema as EnumWorkTypeFieldUpdateOperationsInputObjectSchema } from './EnumWorkTypeFieldUpdateOperationsInput.schema';
import { WorkStatusSchema } from '../enums/WorkStatus.schema';
import { EnumWorkStatusFieldUpdateOperationsInputObjectSchema as EnumWorkStatusFieldUpdateOperationsInputObjectSchema } from './EnumWorkStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([WorkTypeSchema, z.lazy(() => EnumWorkTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([WorkStatusSchema, z.lazy(() => EnumWorkStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  dedupeKey: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  sqsMessageId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  sqsGroupId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  payload: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  attempts: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nextVisibleAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WorkItemUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.WorkItemUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemUpdateManyMutationInput>;
export const WorkItemUpdateManyMutationInputObjectZodSchema = makeSchema();
