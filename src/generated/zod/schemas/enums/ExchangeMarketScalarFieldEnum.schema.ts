import * as z from 'zod';

export const ExchangeMarketScalarFieldEnumSchema = z.enum(['id', 'exchangeId', 'code', 'name', 'restBaseUrl', 'wsBaseUrl', 'active', 'createdAt', 'updatedAt'])

export type ExchangeMarketScalarFieldEnum = z.infer<typeof ExchangeMarketScalarFieldEnumSchema>;