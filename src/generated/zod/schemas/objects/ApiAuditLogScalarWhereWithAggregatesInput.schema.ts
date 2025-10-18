import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const apiauditlogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ApiAuditLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ApiAuditLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ApiAuditLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ApiAuditLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ApiAuditLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  path: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  method: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  ip: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  ua: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  payload: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ApiAuditLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ApiAuditLogScalarWhereWithAggregatesInput> = apiauditlogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ApiAuditLogScalarWhereWithAggregatesInput>;
export const ApiAuditLogScalarWhereWithAggregatesInputObjectZodSchema = apiauditlogscalarwherewithaggregatesinputSchema;
