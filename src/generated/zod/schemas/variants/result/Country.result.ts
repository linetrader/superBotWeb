import * as z from 'zod';

// prettier-ignore
export const CountryResultSchema = z.object({
    code: z.string(),
    name: z.string(),
    users: z.array(z.unknown())
}).strict();

export type CountryResultType = z.infer<typeof CountryResultSchema>;
