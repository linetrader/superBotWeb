import * as z from 'zod';

// prettier-ignore
export const ExchangeCredentialModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    exchangeId: z.string(),
    exchange: z.unknown(),
    apiKeyCipher: z.string(),
    apiKeyIv: z.string(),
    apiKeyTag: z.string(),
    secretCipher: z.string(),
    secretIv: z.string(),
    secretTag: z.string(),
    keyAlg: z.string(),
    keyVersion: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ExchangeCredentialPureType = z.infer<typeof ExchangeCredentialModelSchema>;
