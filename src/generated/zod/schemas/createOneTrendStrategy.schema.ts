import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategySelectObjectSchema as TrendStrategySelectObjectSchema } from './objects/TrendStrategySelect.schema';
import { TrendStrategyIncludeObjectSchema as TrendStrategyIncludeObjectSchema } from './objects/TrendStrategyInclude.schema';
import { TrendStrategyCreateInputObjectSchema as TrendStrategyCreateInputObjectSchema } from './objects/TrendStrategyCreateInput.schema';
import { TrendStrategyUncheckedCreateInputObjectSchema as TrendStrategyUncheckedCreateInputObjectSchema } from './objects/TrendStrategyUncheckedCreateInput.schema';

export const TrendStrategyCreateOneSchema: z.ZodType<Prisma.TrendStrategyCreateArgs> = z.object({ select: TrendStrategySelectObjectSchema.optional(), include: TrendStrategyIncludeObjectSchema.optional(), data: z.union([TrendStrategyCreateInputObjectSchema, TrendStrategyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TrendStrategyCreateArgs>;

export const TrendStrategyCreateOneZodSchema = z.object({ select: TrendStrategySelectObjectSchema.optional(), include: TrendStrategyIncludeObjectSchema.optional(), data: z.union([TrendStrategyCreateInputObjectSchema, TrendStrategyUncheckedCreateInputObjectSchema]) }).strict();