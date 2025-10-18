import * as z from 'zod';
export const BotRuntimeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    botId: z.number(),
    bot: z.number(),
    status: z.number(),
    pid: z.number(),
    queueJobId: z.number(),
    startedAt: z.number(),
    stoppedAt: z.number(),
    lastHeartbeat: z.number(),
    lastError: z.number(),
    workerTaskArn: z.number(),
    workerRevision: z.number(),
    desiredState: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    pid: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    pid: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    botId: z.string().nullable(),
    pid: z.number().int().nullable(),
    queueJobId: z.string().nullable(),
    startedAt: z.date().nullable(),
    stoppedAt: z.date().nullable(),
    lastHeartbeat: z.date().nullable(),
    lastError: z.string().nullable(),
    workerTaskArn: z.string().nullable(),
    workerRevision: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    botId: z.string().nullable(),
    pid: z.number().int().nullable(),
    queueJobId: z.string().nullable(),
    startedAt: z.date().nullable(),
    stoppedAt: z.date().nullable(),
    lastHeartbeat: z.date().nullable(),
    lastError: z.string().nullable(),
    workerTaskArn: z.string().nullable(),
    workerRevision: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});