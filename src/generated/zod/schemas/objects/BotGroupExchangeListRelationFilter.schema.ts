import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeWhereInputObjectSchema as BotGroupExchangeWhereInputObjectSchema } from './BotGroupExchangeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BotGroupExchangeWhereInputObjectSchema).optional(),
  some: z.lazy(() => BotGroupExchangeWhereInputObjectSchema).optional(),
  none: z.lazy(() => BotGroupExchangeWhereInputObjectSchema).optional()
}).strict();
export const BotGroupExchangeListRelationFilterObjectSchema: z.ZodType<Prisma.BotGroupExchangeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeListRelationFilter>;
export const BotGroupExchangeListRelationFilterObjectZodSchema = makeSchema();
