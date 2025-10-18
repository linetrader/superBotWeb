import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExchangeMarketOrderByRelationAggregateInputObjectSchema as ExchangeMarketOrderByRelationAggregateInputObjectSchema } from './ExchangeMarketOrderByRelationAggregateInput.schema';
import { ExchangeCredentialOrderByRelationAggregateInputObjectSchema as ExchangeCredentialOrderByRelationAggregateInputObjectSchema } from './ExchangeCredentialOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  supportsFutures: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  markets: z.lazy(() => ExchangeMarketOrderByRelationAggregateInputObjectSchema).optional(),
  credentials: z.lazy(() => ExchangeCredentialOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ExchangeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ExchangeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeOrderByWithRelationInput>;
export const ExchangeOrderByWithRelationInputObjectZodSchema = makeSchema();
