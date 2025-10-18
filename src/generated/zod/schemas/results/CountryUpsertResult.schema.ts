import * as z from 'zod';
export const CountryUpsertResultSchema = z.object({
  code: z.string(),
  name: z.string(),
  users: z.array(z.unknown())
});