import * as z from 'zod';
export const ApiAuditLogUpsertResultSchema = z.object({
  id: z.string(),
  userId: z.string().optional(),
  path: z.string(),
  method: z.string(),
  status: z.number().int(),
  ip: z.string().optional(),
  ua: z.string().optional(),
  payload: z.unknown().optional(),
  createdAt: z.date()
});