import * as z from 'zod';
export const BotRuntimeUpdateResultSchema = z.nullable(z.object({
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
}));