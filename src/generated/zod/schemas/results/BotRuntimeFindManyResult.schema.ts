import * as z from 'zod';
export const BotRuntimeFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  botId: z.string(),
  bot: z.unknown(),
  status: z.unknown(),
  pid: z.number().int().optional(),
  queueJobId: z.string().optional(),
  startedAt: z.date().optional(),
  stoppedAt: z.date().optional(),
  lastHeartbeat: z.date().optional(),
  lastError: z.string().optional(),
  workerTaskArn: z.string().optional(),
  workerRevision: z.string().optional(),
  desiredState: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
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