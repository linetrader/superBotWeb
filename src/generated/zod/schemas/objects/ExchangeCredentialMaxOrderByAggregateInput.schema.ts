import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  exchangeId: SortOrderSchema.optional(),
  apiKeyCipher: SortOrderSchema.optional(),
  apiKeyIv: SortOrderSchema.optional(),
  apiKeyTag: SortOrderSchema.optional(),
  secretCipher: SortOrderSchema.optional(),
  secretIv: SortOrderSchema.optional(),
  secretTag: SortOrderSchema.optional(),
  keyAlg: SortOrderSchema.optional(),
  keyVersion: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ExchangeCredentialMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialMaxOrderByAggregateInput>;
export const ExchangeCredentialMaxOrderByAggregateInputObjectZodSchema = makeSchema();
