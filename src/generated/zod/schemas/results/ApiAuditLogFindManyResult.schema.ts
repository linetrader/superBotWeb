import * as z from 'zod';
export const ApiAuditLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string().optional(),
  path: z.string(),
  method: z.string(),
  status: z.number().int(),
  ip: z.string().optional(),
  ua: z.string().optional(),
  payload: z.unknown().optional(),
  createdAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});