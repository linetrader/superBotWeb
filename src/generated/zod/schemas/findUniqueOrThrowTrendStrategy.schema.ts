import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategySelectObjectSchema as TrendStrategySelectObjectSchema } from './objects/TrendStrategySelect.schema';
import { TrendStrategyIncludeObjectSchema as TrendStrategyIncludeObjectSchema } from './objects/TrendStrategyInclude.schema';
import { TrendStrategyWhereUniqueInputObjectSchema as TrendStrategyWhereUniqueInputObjectSchema } from './objects/TrendStrategyWhereUniqueInput.schema';

export const TrendStrategyFindUniqueOrThrowSchema: z.ZodType<Prisma.TrendStrategyFindUniqueOrThrowArgs> = z.object({ select: TrendStrategySelectObjectSchema.optional(), include: TrendStrategyIncludeObjectSchema.optional(), where: TrendStrategyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TrendStrategyFindUniqueOrThrowArgs>;

export const TrendStrategyFindUniqueOrThrowZodSchema = z.object({ select: TrendStrategySelectObjectSchema.optional(), include: TrendStrategyIncludeObjectSchema.optional(), where: TrendStrategyWhereUniqueInputObjectSchema }).strict();