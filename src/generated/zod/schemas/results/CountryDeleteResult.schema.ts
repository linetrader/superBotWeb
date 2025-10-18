import * as z from 'zod';
export const CountryDeleteResultSchema = z.nullable(z.object({
  code: z.string(),
  name: z.string(),
  users: z.array(z.unknown())
}));