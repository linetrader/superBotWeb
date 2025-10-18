import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { CountryWhereInputObjectSchema as CountryWhereInputObjectSchema } from './CountryWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CountryWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => CountryWhereInputObjectSchema).optional().nullable()
}).strict();
export const CountryNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.CountryNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CountryNullableScalarRelationFilter>;
export const CountryNullableScalarRelationFilterObjectZodSchema = makeSchema();
