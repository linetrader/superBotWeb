import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ExchangeMarketCountOrderByAggregateInputObjectSchema as ExchangeMarketCountOrderByAggregateInputObjectSchema } from './ExchangeMarketCountOrderByAggregateInput.schema';
import { ExchangeMarketMaxOrderByAggregateInputObjectSchema as ExchangeMarketMaxOrderByAggregateInputObjectSchema } from './ExchangeMarketMaxOrderByAggregateInput.schema';
import { ExchangeMarketMinOrderByAggregateInputObjectSchema as ExchangeMarketMinOrderByAggregateInputObjectSchema } from './ExchangeMarketMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  exchangeId: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  restBaseUrl: SortOrderSchema.optional(),
  wsBaseUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  active: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ExchangeMarketCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ExchangeMarketMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ExchangeMarketMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ExchangeMarketOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ExchangeMarketOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketOrderByWithAggregationInput>;
export const ExchangeMarketOrderByWithAggregationInputObjectZodSchema = makeSchema();
