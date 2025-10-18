import * as z from 'zod';

// prettier-ignore
export const CountryInputSchema = z.object({
    code: z.string(),
    name: z.string(),
    users: z.array(z.unknown())
}).strict();

export type CountryInputType = z.infer<typeof CountryInputSchema>;
