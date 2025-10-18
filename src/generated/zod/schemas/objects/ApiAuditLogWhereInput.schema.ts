import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const apiauditlogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ApiAuditLogWhereInputObjectSchema), z.lazy(() => ApiAuditLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ApiAuditLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ApiAuditLogWhereInputObjectSchema), z.lazy(() => ApiAuditLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  path: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  method: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ip: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ua: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  payload: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ApiAuditLogWhereInputObjectSchema: z.ZodType<Prisma.ApiAuditLogWhereInput> = apiauditlogwhereinputSchema as unknown as z.ZodType<Prisma.ApiAuditLogWhereInput>;
export const ApiAuditLogWhereInputObjectZodSchema = apiauditlogwhereinputSchema;
