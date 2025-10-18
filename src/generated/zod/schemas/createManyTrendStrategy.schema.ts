import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategyCreateManyInputObjectSchema as TrendStrategyCreateManyInputObjectSchema } from './objects/TrendStrategyCreateManyInput.schema';

export const TrendStrategyCreateManySchema: z.ZodType<Prisma.TrendStrategyCreateManyArgs> = z.object({ data: z.union([ TrendStrategyCreateManyInputObjectSchema, z.array(TrendStrategyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TrendStrategyCreateManyArgs>;

export const TrendStrategyCreateManyZodSchema = z.object({ data: z.union([ TrendStrategyCreateManyInputObjectSchema, z.array(TrendStrategyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();