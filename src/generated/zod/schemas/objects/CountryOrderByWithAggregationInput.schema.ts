import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CountryCountOrderByAggregateInputObjectSchema as CountryCountOrderByAggregateInputObjectSchema } from './CountryCountOrderByAggregateInput.schema';
import { CountryMaxOrderByAggregateInputObjectSchema as CountryMaxOrderByAggregateInputObjectSchema } from './CountryMaxOrderByAggregateInput.schema';
import { CountryMinOrderByAggregateInputObjectSchema as CountryMinOrderByAggregateInputObjectSchema } from './CountryMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  code: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  _count: z.lazy(() => CountryCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CountryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CountryMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CountryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CountryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CountryOrderByWithAggregationInput>;
export const CountryOrderByWithAggregationInputObjectZodSchema = makeSchema();
