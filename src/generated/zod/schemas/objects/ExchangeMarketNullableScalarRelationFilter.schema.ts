import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './ExchangeMarketWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional().nullable()
}).strict();
export const ExchangeMarketNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ExchangeMarketNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketNullableScalarRelationFilter>;
export const ExchangeMarketNullableScalarRelationFilterObjectZodSchema = makeSchema();
