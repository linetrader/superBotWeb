import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategySelectObjectSchema as TrendStrategySelectObjectSchema } from './objects/TrendStrategySelect.schema';
import { TrendStrategyIncludeObjectSchema as TrendStrategyIncludeObjectSchema } from './objects/TrendStrategyInclude.schema';
import { TrendStrategyUpdateInputObjectSchema as TrendStrategyUpdateInputObjectSchema } from './objects/TrendStrategyUpdateInput.schema';
import { TrendStrategyUncheckedUpdateInputObjectSchema as TrendStrategyUncheckedUpdateInputObjectSchema } from './objects/TrendStrategyUncheckedUpdateInput.schema';
import { TrendStrategyWhereUniqueInputObjectSchema as TrendStrategyWhereUniqueInputObjectSchema } from './objects/TrendStrategyWhereUniqueInput.schema';

export const TrendStrategyUpdateOneSchema: z.ZodType<Prisma.TrendStrategyUpdateArgs> = z.object({ select: TrendStrategySelectObjectSchema.optional(), include: TrendStrategyIncludeObjectSchema.optional(), data: z.union([TrendStrategyUpdateInputObjectSchema, TrendStrategyUncheckedUpdateInputObjectSchema]), where: TrendStrategyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TrendStrategyUpdateArgs>;

export const TrendStrategyUpdateOneZodSchema = z.object({ select: TrendStrategySelectObjectSchema.optional(), include: TrendStrategyIncludeObjectSchema.optional(), data: z.union([TrendStrategyUpdateInputObjectSchema, TrendStrategyUncheckedUpdateInputObjectSchema]), where: TrendStrategyWhereUniqueInputObjectSchema }).strict();