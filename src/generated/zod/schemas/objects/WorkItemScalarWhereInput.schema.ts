import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumWorkTypeFilterObjectSchema as EnumWorkTypeFilterObjectSchema } from './EnumWorkTypeFilter.schema';
import { WorkTypeSchema } from '../enums/WorkType.schema';
import { EnumWorkStatusFilterObjectSchema as EnumWorkStatusFilterObjectSchema } from './EnumWorkStatusFilter.schema';
import { WorkStatusSchema } from '../enums/WorkStatus.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkItemScalarWhereInputObjectSchema), z.lazy(() => WorkItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkItemScalarWhereInputObjectSchema), z.lazy(() => WorkItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  botId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumWorkTypeFilterObjectSchema), WorkTypeSchema]).optional(),
  status: z.union([z.lazy(() => EnumWorkStatusFilterObjectSchema), WorkStatusSchema]).optional(),
  dedupeKey: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  sqsMessageId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  sqsGroupId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  payload: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  attempts: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nextVisibleAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkItemScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkItemScalarWhereInput> = workitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkItemScalarWhereInput>;
export const WorkItemScalarWhereInputObjectZodSchema = workitemscalarwhereinputSchema;
