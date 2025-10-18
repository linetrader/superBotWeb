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
export const ExchangeCredentialMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialMinOrderByAggregateInput>;
export const ExchangeCredentialMinOrderByAggregateInputObjectZodSchema = makeSchema();
