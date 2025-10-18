import * as z from 'zod';
export const NotificationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    channel: z.number(),
    target: z.number(),
    payload: z.number(),
    status: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    channel: z.string().nullable(),
    target: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    channel: z.string().nullable(),
    target: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});