import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  path: z.boolean().optional(),
  method: z.boolean().optional(),
  status: z.boolean().optional(),
  ip: z.boolean().optional(),
  ua: z.boolean().optional(),
  payload: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const ApiAuditLogSelectObjectSchema: z.ZodType<Prisma.ApiAuditLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.ApiAuditLogSelect>;
export const ApiAuditLogSelectObjectZodSchema = makeSchema();
