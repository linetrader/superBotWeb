import * as z from 'zod';

export const CountryScalarFieldEnumSchema = z.enum(['code', 'name'])

export type CountryScalarFieldEnum = z.infer<typeof CountryScalarFieldEnumSchema>;