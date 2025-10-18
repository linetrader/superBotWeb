import * as z from 'zod';
export const ApiAuditLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    path: z.number(),
    method: z.number(),
    status: z.number(),
    ip: z.number(),
    ua: z.number(),
    payload: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    status: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    status: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    path: z.string().nullable(),
    method: z.string().nullable(),
    status: z.number().int().nullable(),
    ip: z.string().nullable(),
    ua: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    path: z.string().nullable(),
    method: z.string().nullable(),
    status: z.number().int().nullable(),
    ip: z.string().nullable(),
    ua: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});