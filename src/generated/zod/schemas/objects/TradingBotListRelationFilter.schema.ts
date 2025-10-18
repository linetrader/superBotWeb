import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TradingBotWhereInputObjectSchema).optional(),
  some: z.lazy(() => TradingBotWhereInputObjectSchema).optional(),
  none: z.lazy(() => TradingBotWhereInputObjectSchema).optional()
}).strict();
export const TradingBotListRelationFilterObjectSchema: z.ZodType<Prisma.TradingBotListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotListRelationFilter>;
export const TradingBotListRelationFilterObjectZodSchema = makeSchema();
