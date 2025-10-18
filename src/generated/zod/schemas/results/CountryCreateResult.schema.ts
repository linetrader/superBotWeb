import * as z from 'zod';
export const CountryCreateResultSchema = z.object({
  code: z.string(),
  name: z.string(),
  users: z.array(z.unknown())
});