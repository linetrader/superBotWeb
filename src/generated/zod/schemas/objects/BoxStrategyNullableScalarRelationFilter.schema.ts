import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BoxStrategyWhereInputObjectSchema as BoxStrategyWhereInputObjectSchema } from './BoxStrategyWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BoxStrategyWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => BoxStrategyWhereInputObjectSchema).optional().nullable()
}).strict();
export const BoxStrategyNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.BoxStrategyNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BoxStrategyNullableScalarRelationFilter>;
export const BoxStrategyNullableScalarRelationFilterObjectZodSchema = makeSchema();
