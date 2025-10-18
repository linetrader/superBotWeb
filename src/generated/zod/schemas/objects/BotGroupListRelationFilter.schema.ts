import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './BotGroupWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BotGroupWhereInputObjectSchema).optional(),
  some: z.lazy(() => BotGroupWhereInputObjectSchema).optional(),
  none: z.lazy(() => BotGroupWhereInputObjectSchema).optional()
}).strict();
export const BotGroupListRelationFilterObjectSchema: z.ZodType<Prisma.BotGroupListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupListRelationFilter>;
export const BotGroupListRelationFilterObjectZodSchema = makeSchema();
