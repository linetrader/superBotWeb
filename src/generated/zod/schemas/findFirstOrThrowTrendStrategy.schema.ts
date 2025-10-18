import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TrendStrategyIncludeObjectSchema as TrendStrategyIncludeObjectSchema } from './objects/TrendStrategyInclude.schema';
import { TrendStrategyOrderByWithRelationInputObjectSchema as TrendStrategyOrderByWithRelationInputObjectSchema } from './objects/TrendStrategyOrderByWithRelationInput.schema';
import { TrendStrategyWhereInputObjectSchema as TrendStrategyWhereInputObjectSchema } from './objects/TrendStrategyWhereInput.schema';
import { TrendStrategyWhereUniqueInputObjectSchema as TrendStrategyWhereUniqueInputObjectSchema } from './objects/TrendStrategyWhereUniqueInput.schema';
import { TrendStrategyScalarFieldEnumSchema } from './enums/TrendStrategyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TrendStrategyFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TrendStrategySelect> = z.object({
    id: z.boolean().optional(),
    strategyConfigId: z.boolean().optional(),
    strategyConfig: z.boolean().optional(),
    trendRsiUpperPullback: z.boolean().optional(),
    trendRsiLowerPullback: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TrendStrategySelect>;

export const TrendStrategyFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    strategyConfigId: z.boolean().optional(),
    strategyConfig: z.boolean().optional(),
    trendRsiUpperPullback: z.boolean().optional(),
    trendRsiLowerPullback: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const TrendStrategyFindFirstOrThrowSchema: z.ZodType<Prisma.TrendStrategyFindFirstOrThrowArgs> = z.object({ select: TrendStrategyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TrendStrategyIncludeObjectSchema.optional()), orderBy: z.union([TrendStrategyOrderByWithRelationInputObjectSchema, TrendStrategyOrderByWithRelationInputObjectSchema.array()]).optional(), where: TrendStrategyWhereInputObjectSchema.optional(), cursor: TrendStrategyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TrendStrategyScalarFieldEnumSchema, TrendStrategyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TrendStrategyFindFirstOrThrowArgs>;

export const TrendStrategyFindFirstOrThrowZodSchema = z.object({ select: TrendStrategyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TrendStrategyIncludeObjectSchema.optional()), orderBy: z.union([TrendStrategyOrderByWithRelationInputObjectSchema, TrendStrategyOrderByWithRelationInputObjectSchema.array()]).optional(), where: TrendStrategyWhereInputObjectSchema.optional(), cursor: TrendStrategyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TrendStrategyScalarFieldEnumSchema, TrendStrategyScalarFieldEnumSchema.array()]).optional() }).strict();