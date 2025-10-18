import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExchangeCredentialCountOrderByAggregateInputObjectSchema as ExchangeCredentialCountOrderByAggregateInputObjectSchema } from './ExchangeCredentialCountOrderByAggregateInput.schema';
import { ExchangeCredentialAvgOrderByAggregateInputObjectSchema as ExchangeCredentialAvgOrderByAggregateInputObjectSchema } from './ExchangeCredentialAvgOrderByAggregateInput.schema';
import { ExchangeCredentialMaxOrderByAggregateInputObjectSchema as ExchangeCredentialMaxOrderByAggregateInputObjectSchema } from './ExchangeCredentialMaxOrderByAggregateInput.schema';
import { ExchangeCredentialMinOrderByAggregateInputObjectSchema as ExchangeCredentialMinOrderByAggregateInputObjectSchema } from './ExchangeCredentialMinOrderByAggregateInput.schema';
import { ExchangeCredentialSumOrderByAggregateInputObjectSchema as ExchangeCredentialSumOrderByAggregateInputObjectSchema } from './ExchangeCredentialSumOrderByAggregateInput.schema'

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
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ExchangeCredentialCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ExchangeCredentialAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ExchangeCredentialMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ExchangeCredentialMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ExchangeCredentialSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ExchangeCredentialOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialOrderByWithAggregationInput>;
export const ExchangeCredentialOrderByWithAggregationInputObjectZodSchema = makeSchema();
