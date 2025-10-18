import * as z from 'zod';
export const ExchangeCredentialGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  exchangeId: z.string(),
  apiKeyCipher: z.string(),
  apiKeyIv: z.string(),
  apiKeyTag: z.string(),
  secretCipher: z.string(),
  secretIv: z.string(),
  secretTag: z.string(),
  keyAlg: z.string(),
  keyVersion: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    exchangeId: z.number(),
    exchange: z.number(),
    apiKeyCipher: z.number(),
    apiKeyIv: z.number(),
    apiKeyTag: z.number(),
    secretCipher: z.number(),
    secretIv: z.number(),
    secretTag: z.number(),
    keyAlg: z.number(),
    keyVersion: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    keyVersion: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    keyVersion: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    exchangeId: z.string().nullable(),
    apiKeyCipher: z.string().nullable(),
    apiKeyIv: z.string().nullable(),
    apiKeyTag: z.string().nullable(),
    secretCipher: z.string().nullable(),
    secretIv: z.string().nullable(),
    secretTag: z.string().nullable(),
    keyAlg: z.string().nullable(),
    keyVersion: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    exchangeId: z.string().nullable(),
    apiKeyCipher: z.string().nullable(),
    apiKeyIv: z.string().nullable(),
    apiKeyTag: z.string().nullable(),
    secretCipher: z.string().nullable(),
    secretIv: z.string().nullable(),
    secretTag: z.string().nullable(),
    keyAlg: z.string().nullable(),
    keyVersion: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));