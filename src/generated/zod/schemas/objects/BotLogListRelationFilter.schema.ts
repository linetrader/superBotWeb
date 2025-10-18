import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotLogWhereInputObjectSchema as BotLogWhereInputObjectSchema } from './BotLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BotLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => BotLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => BotLogWhereInputObjectSchema).optional()
}).strict();
export const BotLogListRelationFilterObjectSchema: z.ZodType<Prisma.BotLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BotLogListRelationFilter>;
export const BotLogListRelationFilterObjectZodSchema = makeSchema();
