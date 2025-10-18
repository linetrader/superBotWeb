import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ApiAuditLogSelectObjectSchema as ApiAuditLogSelectObjectSchema } from './ApiAuditLogSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ApiAuditLogSelectObjectSchema).optional()
}).strict();
export const ApiAuditLogArgsObjectSchema = makeSchema();
export const ApiAuditLogArgsObjectZodSchema = makeSchema();
