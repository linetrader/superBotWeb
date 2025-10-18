import * as z from 'zod';
export const CountryCreateManyResultSchema = z.object({
  count: z.number()
});