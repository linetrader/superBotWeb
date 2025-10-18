import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const exchangemarketscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ExchangeMarketScalarWhereInputObjectSchema), z.lazy(() => ExchangeMarketScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExchangeMarketScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExchangeMarketScalarWhereInputObjectSchema), z.lazy(() => ExchangeMarketScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  exchangeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  restBaseUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  wsBaseUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  active: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ExchangeMarketScalarWhereInputObjectSchema: z.ZodType<Prisma.ExchangeMarketScalarWhereInput> = exchangemarketscalarwhereinputSchema as unknown as z.ZodType<Prisma.ExchangeMarketScalarWhereInput>;
export const ExchangeMarketScalarWhereInputObjectZodSchema = exchangemarketscalarwhereinputSchema;
