import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategyOrderByWithRelationInputObjectSchema as TrendStrategyOrderByWithRelationInputObjectSchema } from './objects/TrendStrategyOrderByWithRelationInput.schema';
import { TrendStrategyWhereInputObjectSchema as TrendStrategyWhereInputObjectSchema } from './objects/TrendStrategyWhereInput.schema';
import { TrendStrategyWhereUniqueInputObjectSchema as TrendStrategyWhereUniqueInputObjectSchema } from './objects/TrendStrategyWhereUniqueInput.schema';
import { TrendStrategyCountAggregateInputObjectSchema as TrendStrategyCountAggregateInputObjectSchema } from './objects/TrendStrategyCountAggregateInput.schema';

export const TrendStrategyCountSchema: z.ZodType<Prisma.TrendStrategyCountArgs> = z.object({ orderBy: z.union([TrendStrategyOrderByWithRelationInputObjectSchema, TrendStrategyOrderByWithRelationInputObjectSchema.array()]).optional(), where: TrendStrategyWhereInputObjectSchema.optional(), cursor: TrendStrategyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TrendStrategyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TrendStrategyCountArgs>;

export const TrendStrategyCountZodSchema = z.object({ orderBy: z.union([TrendStrategyOrderByWithRelationInputObjectSchema, TrendStrategyOrderByWithRelationInputObjectSchema.array()]).optional(), where: TrendStrategyWhereInputObjectSchema.optional(), cursor: TrendStrategyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TrendStrategyCountAggregateInputObjectSchema ]).optional() }).strict();