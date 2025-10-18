import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const countryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CountryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CountryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CountryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CountryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CountryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(2)]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CountryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CountryScalarWhereWithAggregatesInput> = countryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CountryScalarWhereWithAggregatesInput>;
export const CountryScalarWhereWithAggregatesInputObjectZodSchema = countryscalarwherewithaggregatesinputSchema;
