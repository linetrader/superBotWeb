import * as z from 'zod';
export const CountryGroupByResultSchema = z.array(z.object({
  code: z.string(),
  name: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));