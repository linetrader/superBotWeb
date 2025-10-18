import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './ExchangeMarketWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional(),
  some: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional(),
  none: z.lazy(() => ExchangeMarketWhereInputObjectSchema).optional()
}).strict();
export const ExchangeMarketListRelationFilterObjectSchema: z.ZodType<Prisma.ExchangeMarketListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketListRelationFilter>;
export const ExchangeMarketListRelationFilterObjectZodSchema = makeSchema();
