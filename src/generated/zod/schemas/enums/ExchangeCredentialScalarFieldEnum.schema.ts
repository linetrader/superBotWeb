import * as z from 'zod';

export const ExchangeCredentialScalarFieldEnumSchema = z.enum(['id', 'userId', 'exchangeId', 'apiKeyCipher', 'apiKeyIv', 'apiKeyTag', 'secretCipher', 'secretIv', 'secretTag', 'keyAlg', 'keyVersion', 'createdAt', 'updatedAt'])

export type ExchangeCredentialScalarFieldEnum = z.infer<typeof ExchangeCredentialScalarFieldEnumSchema>;