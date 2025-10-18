import * as z from 'zod';
export const WorkAttemptFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  workItemId: z.string(),
  workItem: z.unknown(),
  startedAt: z.date(),
  finishedAt: z.date().optional(),
  workerTaskArn: z.string().optional(),
  exitCode: z.number().int().optional(),
  error: z.string().optional(),
  logsRef: z.string().optional()
}));