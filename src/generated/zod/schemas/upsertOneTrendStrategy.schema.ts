import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategySelectObjectSchema as TrendStrategySelectObjectSchema } from './objects/TrendStrategySelect.schema';
import { TrendStrategyIncludeObjectSchema as TrendStrategyIncludeObjectSchema } from './objects/TrendStrategyInclude.schema';
import { TrendStrategyWhereUniqueInputObjectSchema as TrendStrategyWhereUniqueInputObjectSchema } from './objects/TrendStrategyWhereUniqueInput.schema';
import { TrendStrategyCreateInputObjectSchema as TrendStrategyCreateInputObjectSchema } from './objects/TrendStrategyCreateInput.schema';
import { TrendStrategyUncheckedCreateInputObjectSchema as TrendStrategyUncheckedCreateInputObjectSchema } from './objects/TrendStrategyUncheckedCreateInput.schema';
import { TrendStrategyUpdateInputObjectSchema as TrendStrategyUpdateInputObjectSchema } from './objects/TrendStrategyUpdateInput.schema';
import { TrendStrategyUncheckedUpdateInputObjectSchema as TrendStrategyUncheckedUpdateInputObjectSchema } from './objects/TrendStrategyUncheckedUpdateInput.schema';

export const TrendStrategyUpsertOneSchema: z.ZodType<Prisma.TrendStrategyUpsertArgs> = z.object({ select: TrendStrategySelectObjectSchema.optional(), include: TrendStrategyIncludeObjectSchema.optional(), where: TrendStrategyWhereUniqueInputObjectSchema, create: z.union([ TrendStrategyCreateInputObjectSchema, TrendStrategyUncheckedCreateInputObjectSchema ]), update: z.union([ TrendStrategyUpdateInputObjectSchema, TrendStrategyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TrendStrategyUpsertArgs>;

export const TrendStrategyUpsertOneZodSchema = z.object({ select: TrendStrategySelectObjectSchema.optional(), include: TrendStrategyIncludeObjectSchema.optional(), where: TrendStrategyWhereUniqueInputObjectSchema, create: z.union([ TrendStrategyCreateInputObjectSchema, TrendStrategyUncheckedCreateInputObjectSchema ]), update: z.union([ TrendStrategyUpdateInputObjectSchema, TrendStrategyUncheckedUpdateInputObjectSchema ]) }).strict();