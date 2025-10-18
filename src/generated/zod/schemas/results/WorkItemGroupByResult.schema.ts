import * as z from 'zod';
export const WorkItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  botId: z.string(),
  dedupeKey: z.string(),
  sqsMessageId: z.string(),
  sqsGroupId: z.string(),
  payload: z.unknown(),
  attempts: z.number().int(),
  nextVisibleAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    botId: z.number(),
    bot: z.number(),
    type: z.number(),
    status: z.number(),
    dedupeKey: z.number(),
    sqsMessageId: z.number(),
    sqsGroupId: z.number(),
    payload: z.number(),
    attempts: z.number(),
    nextVisibleAt: z.number(),
    runs: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    attempts: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    attempts: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    botId: z.string().nullable(),
    dedupeKey: z.string().nullable(),
    sqsMessageId: z.string().nullable(),
    sqsGroupId: z.string().nullable(),
    attempts: z.number().int().nullable(),
    nextVisibleAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    botId: z.string().nullable(),
    dedupeKey: z.string().nullable(),
    sqsMessageId: z.string().nullable(),
    sqsGroupId: z.string().nullable(),
    attempts: z.number().int().nullable(),
    nextVisibleAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));