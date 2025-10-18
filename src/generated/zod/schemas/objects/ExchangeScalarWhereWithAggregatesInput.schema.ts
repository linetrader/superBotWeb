import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const exchangescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ExchangeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ExchangeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExchangeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExchangeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ExchangeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(20)]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  active: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  supportsFutures: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ExchangeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ExchangeScalarWhereWithAggregatesInput> = exchangescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ExchangeScalarWhereWithAggregatesInput>;
export const ExchangeScalarWhereWithAggregatesInputObjectZodSchema = exchangescalarwherewithaggregatesinputSchema;
