import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategySelectObjectSchema as TrendStrategySelectObjectSchema } from './objects/TrendStrategySelect.schema';
import { TrendStrategyIncludeObjectSchema as TrendStrategyIncludeObjectSchema } from './objects/TrendStrategyInclude.schema';
import { TrendStrategyWhereUniqueInputObjectSchema as TrendStrategyWhereUniqueInputObjectSchema } from './objects/TrendStrategyWhereUniqueInput.schema';

export const TrendStrategyFindUniqueSchema: z.ZodType<Prisma.TrendStrategyFindUniqueArgs> = z.object({ select: TrendStrategySelectObjectSchema.optional(), include: TrendStrategyIncludeObjectSchema.optional(), where: TrendStrategyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TrendStrategyFindUniqueArgs>;

export const TrendStrategyFindUniqueZodSchema = z.object({ select: TrendStrategySelectObjectSchema.optional(), include: TrendStrategyIncludeObjectSchema.optional(), where: TrendStrategyWhereUniqueInputObjectSchema }).strict();