import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const exchangemarketscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ExchangeMarketScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ExchangeMarketScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExchangeMarketScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExchangeMarketScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ExchangeMarketScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  exchangeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(16)]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  restBaseUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  wsBaseUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  active: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ExchangeMarketScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ExchangeMarketScalarWhereWithAggregatesInput> = exchangemarketscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ExchangeMarketScalarWhereWithAggregatesInput>;
export const ExchangeMarketScalarWhereWithAggregatesInputObjectZodSchema = exchangemarketscalarwherewithaggregatesinputSchema;
