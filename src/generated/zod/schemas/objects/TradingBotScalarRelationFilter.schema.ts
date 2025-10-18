import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TradingBotWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TradingBotWhereInputObjectSchema).optional()
}).strict();
export const TradingBotScalarRelationFilterObjectSchema: z.ZodType<Prisma.TradingBotScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotScalarRelationFilter>;
export const TradingBotScalarRelationFilterObjectZodSchema = makeSchema();
