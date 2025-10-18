import * as z from 'zod';

// prettier-ignore
export const CountryModelSchema = z.object({
    code: z.string(),
    name: z.string(),
    users: z.array(z.unknown())
}).strict();

export type CountryPureType = z.infer<typeof CountryModelSchema>;
