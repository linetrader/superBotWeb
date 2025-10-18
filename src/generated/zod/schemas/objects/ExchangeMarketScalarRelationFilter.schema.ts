import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './ExchangeMarketWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional()
}).strict();
export const ExchangeMarketScalarRelationFilterObjectSchema: z.ZodType<Prisma.ExchangeMarketScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketScalarRelationFilter>;
export const ExchangeMarketScalarRelationFilterObjectZodSchema = makeSchema();
