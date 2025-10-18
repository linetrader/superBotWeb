import * as z from 'zod';
export const WorkAttemptFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  workItemId: z.string(),
  workItem: z.unknown(),
  startedAt: z.date(),
  finishedAt: z.date().optional(),
  workerTaskArn: z.string().optional(),
  exitCode: z.number().int().optional(),
  error: z.string().optional(),
  logsRef: z.string().optional()
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