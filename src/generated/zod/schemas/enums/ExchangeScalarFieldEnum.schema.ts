import * as z from 'zod';

export const ExchangeScalarFieldEnumSchema = z.enum(['id', 'code', 'name', 'active', 'supportsFutures', 'createdAt', 'updatedAt'])

export type ExchangeScalarFieldEnum = z.infer<typeof ExchangeScalarFieldEnumSchema>;