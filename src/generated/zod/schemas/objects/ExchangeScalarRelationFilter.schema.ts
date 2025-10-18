import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './ExchangeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ExchangeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ExchangeWhereInputObjectSchema).optional()
}).strict();
export const ExchangeScalarRelationFilterObjectSchema: z.ZodType<Prisma.ExchangeScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeScalarRelationFilter>;
export const ExchangeScalarRelationFilterObjectZodSchema = makeSchema();
