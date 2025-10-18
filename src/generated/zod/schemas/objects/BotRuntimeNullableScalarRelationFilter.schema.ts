import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotRuntimeWhereInputObjectSchema as BotRuntimeWhereInputObjectSchema } from './BotRuntimeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BotRuntimeWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => BotRuntimeWhereInputObjectSchema).optional().nullable()
}).strict();
export const BotRuntimeNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.BotRuntimeNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeNullableScalarRelationFilter>;
export const BotRuntimeNullableScalarRelationFilterObjectZodSchema = makeSchema();
