import * as z from 'zod';
export const ApiAuditLogGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  path: z.string(),
  method: z.string(),
  status: z.number().int(),
  ip: z.string(),
  ua: z.string(),
  payload: z.unknown(),
  createdAt: z.date(),
  _count: z.object({
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
  }).nullable().optional()
}));