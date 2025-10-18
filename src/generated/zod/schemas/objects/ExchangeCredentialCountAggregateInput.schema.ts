import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  exchangeId: z.literal(true).optional(),
  apiKeyCipher: z.literal(true).optional(),
  apiKeyIv: z.literal(true).optional(),
  apiKeyTag: z.literal(true).optional(),
  secretCipher: z.literal(true).optional(),
  secretIv: z.literal(true).optional(),
  secretTag: z.literal(true).optional(),
  keyAlg: z.literal(true).optional(),
  keyVersion: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ExchangeCredentialCountAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialCountAggregateInputType>;
export const ExchangeCredentialCountAggregateInputObjectZodSchema = makeSchema();
