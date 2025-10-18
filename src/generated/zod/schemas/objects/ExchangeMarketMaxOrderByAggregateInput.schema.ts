import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  exchangeId: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  restBaseUrl: SortOrderSchema.optional(),
  wsBaseUrl: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ExchangeMarketMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ExchangeMarketMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketMaxOrderByAggregateInput>;
export const ExchangeMarketMaxOrderByAggregateInputObjectZodSchema = makeSchema();
