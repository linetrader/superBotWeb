import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumWorkTypeWithAggregatesFilterObjectSchema as EnumWorkTypeWithAggregatesFilterObjectSchema } from './EnumWorkTypeWithAggregatesFilter.schema';
import { WorkTypeSchema } from '../enums/WorkType.schema';
import { EnumWorkStatusWithAggregatesFilterObjectSchema as EnumWorkStatusWithAggregatesFilterObjectSchema } from './EnumWorkStatusWithAggregatesFilter.schema';
import { WorkStatusSchema } from '../enums/WorkStatus.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const workitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  botId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumWorkTypeWithAggregatesFilterObjectSchema), WorkTypeSchema]).optional(),
  status: z.union([z.lazy(() => EnumWorkStatusWithAggregatesFilterObjectSchema), WorkStatusSchema]).optional(),
  dedupeKey: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  sqsMessageId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  sqsGroupId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  payload: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  attempts: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nextVisibleAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkItemScalarWhereWithAggregatesInput> = workitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkItemScalarWhereWithAggregatesInput>;
export const WorkItemScalarWhereWithAggregatesInputObjectZodSchema = workitemscalarwherewithaggregatesinputSchema;
