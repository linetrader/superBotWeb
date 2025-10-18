import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'username', 'email', 'name', 'passwordHash', 'countryCode', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;