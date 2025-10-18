import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategySelectObjectSchema as TrendStrategySelectObjectSchema } from './objects/TrendStrategySelect.schema';
import { TrendStrategyCreateManyInputObjectSchema as TrendStrategyCreateManyInputObjectSchema } from './objects/TrendStrategyCreateManyInput.schema';

export const TrendStrategyCreateManyAndReturnSchema: z.ZodType<Prisma.TrendStrategyCreateManyAndReturnArgs> = z.object({ select: TrendStrategySelectObjectSchema.optional(), data: z.union([ TrendStrategyCreateManyInputObjectSchema, z.array(TrendStrategyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TrendStrategyCreateManyAndReturnArgs>;

export const TrendStrategyCreateManyAndReturnZodSchema = z.object({ select: TrendStrategySelectObjectSchema.optional(), data: z.union([ TrendStrategyCreateManyInputObjectSchema, z.array(TrendStrategyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();