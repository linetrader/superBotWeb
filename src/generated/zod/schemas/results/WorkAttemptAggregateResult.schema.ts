import * as z from 'zod';
export const WorkAttemptAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    workItemId: z.number(),
    workItem: z.number(),
    startedAt: z.number(),
    finishedAt: z.number(),
    workerTaskArn: z.number(),
    exitCode: z.number(),
    error: z.number(),
    logsRef: z.number()
  }).optional(),
  _sum: z.object({
    exitCode: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    exitCode: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    workItemId: z.string().nullable(),
    startedAt: z.date().nullable(),
    finishedAt: z.date().nullable(),
    workerTaskArn: z.string().nullable(),
    exitCode: z.number().int().nullable(),
    error: z.string().nullable(),
    logsRef: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    workItemId: z.string().nullable(),
    startedAt: z.date().nullable(),
    finishedAt: z.date().nullable(),
    workerTaskArn: z.string().nullable(),
    exitCode: z.number().int().nullable(),
    error: z.string().nullable(),
    logsRef: z.string().nullable()
  }).nullable().optional()});