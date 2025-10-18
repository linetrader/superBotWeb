import * as z from 'zod';
export const CountryAggregateResultSchema = z.object({  _count: z.object({
    code: z.number(),
    name: z.number(),
    users: z.number()
  }).optional(),
  _min: z.object({
    code: z.string().nullable(),
    name: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    code: z.string().nullable(),
    name: z.string().nullable()
  }).nullable().optional()});