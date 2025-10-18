import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TrendStrategyWhereInputObjectSchema as TrendStrategyWhereInputObjectSchema } from './TrendStrategyWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TrendStrategyWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TrendStrategyWhereInputObjectSchema).optional().nullable()
}).strict();
export const TrendStrategyNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TrendStrategyNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TrendStrategyNullableScalarRelationFilter>;
export const TrendStrategyNullableScalarRelationFilterObjectZodSchema = makeSchema();
