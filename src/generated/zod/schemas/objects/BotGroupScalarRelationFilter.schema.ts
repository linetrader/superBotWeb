import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './BotGroupWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BotGroupWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => BotGroupWhereInputObjectSchema).optional()
}).strict();
export const BotGroupScalarRelationFilterObjectSchema: z.ZodType<Prisma.BotGroupScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupScalarRelationFilter>;
export const BotGroupScalarRelationFilterObjectZodSchema = makeSchema();
