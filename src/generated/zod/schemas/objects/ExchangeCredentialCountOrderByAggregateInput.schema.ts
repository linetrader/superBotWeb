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
export const ExchangeCredentialCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialCountOrderByAggregateInput>;
export const ExchangeCredentialCountOrderByAggregateInputObjectZodSchema = makeSchema();
