import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { WorkItemScalarRelationFilterObjectSchema as WorkItemScalarRelationFilterObjectSchema } from './WorkItemScalarRelationFilter.schema';
import { WorkItemWhereInputObjectSchema as WorkItemWhereInputObjectSchema } from './WorkItemWhereInput.schema'

const workattemptwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkAttemptWhereInputObjectSchema), z.lazy(() => WorkAttemptWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkAttemptWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkAttemptWhereInputObjectSchema), z.lazy(() => WorkAttemptWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workItemId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  startedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  finishedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  workerTaskArn: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  exitCode: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  error: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  logsRef: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  workItem: z.union([z.lazy(() => WorkItemScalarRelationFilterObjectSchema), z.lazy(() => WorkItemWhereInputObjectSchema)]).optional()
}).strict();
export const WorkAttemptWhereInputObjectSchema: z.ZodType<Prisma.WorkAttemptWhereInput> = workattemptwhereinputSchema as unknown as z.ZodType<Prisma.WorkAttemptWhereInput>;
export const WorkAttemptWhereInputObjectZodSchema = workattemptwhereinputSchema;
