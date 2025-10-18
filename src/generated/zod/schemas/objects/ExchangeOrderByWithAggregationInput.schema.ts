import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExchangeCountOrderByAggregateInputObjectSchema as ExchangeCountOrderByAggregateInputObjectSchema } from './ExchangeCountOrderByAggregateInput.schema';
import { ExchangeMaxOrderByAggregateInputObjectSchema as ExchangeMaxOrderByAggregateInputObjectSchema } from './ExchangeMaxOrderByAggregateInput.schema';
import { ExchangeMinOrderByAggregateInputObjectSchema as ExchangeMinOrderByAggregateInputObjectSchema } from './ExchangeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  supportsFutures: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ExchangeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ExchangeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ExchangeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ExchangeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ExchangeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeOrderByWithAggregationInput>;
export const ExchangeOrderByWithAggregationInputObjectZodSchema = makeSchema();
