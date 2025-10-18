import * as z from 'zod';
export const ExchangeGroupByResultSchema = z.array(z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  active: z.boolean(),
  supportsFutures: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    code: z.number(),
    name: z.number(),
    active: z.number(),
    supportsFutures: z.number(),
    markets: z.number(),
    credentials: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    name: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    code: z.string().nullable(),
    name: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));