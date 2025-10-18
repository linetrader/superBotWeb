import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ExchangeOrderByWithRelationInputObjectSchema as ExchangeOrderByWithRelationInputObjectSchema } from './ExchangeOrderByWithRelationInput.schema'

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
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  exchange: z.lazy(() => ExchangeOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ExchangeCredentialOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialOrderByWithRelationInput>;
export const ExchangeCredentialOrderByWithRelationInputObjectZodSchema = makeSchema();
