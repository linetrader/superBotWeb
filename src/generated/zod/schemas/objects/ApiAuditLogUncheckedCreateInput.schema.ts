import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional().nullable(),
  path: z.string(),
  method: z.string(),
  status: z.number().int(),
  ip: z.string().optional().nullable(),
  ua: z.string().optional().nullable(),
  payload: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ApiAuditLogUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ApiAuditLogUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiAuditLogUncheckedCreateInput>;
export const ApiAuditLogUncheckedCreateInputObjectZodSchema = makeSchema();
