import * as z from 'zod';
export const ExchangeCredentialFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});