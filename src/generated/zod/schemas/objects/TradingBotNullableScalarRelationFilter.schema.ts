import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TradingBotWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TradingBotWhereInputObjectSchema).optional().nullable()
}).strict();
export const TradingBotNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TradingBotNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotNullableScalarRelationFilter>;
export const TradingBotNullableScalarRelationFilterObjectZodSchema = makeSchema();
