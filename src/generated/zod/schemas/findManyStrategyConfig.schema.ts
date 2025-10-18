import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigIncludeObjectSchema as StrategyConfigIncludeObjectSchema } from './objects/StrategyConfigInclude.schema';
import { StrategyConfigOrderByWithRelationInputObjectSchema as StrategyConfigOrderByWithRelationInputObjectSchema } from './objects/StrategyConfigOrderByWithRelationInput.schema';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './objects/StrategyConfigWhereInput.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './objects/StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigScalarFieldEnumSchema } from './enums/StrategyConfigScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StrategyConfigFindManySelectSchema: z.ZodType<Prisma.StrategyConfigSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    name: z.boolean().optional(),
    kind: z.boolean().optional(),
    useMartin: z.boolean().optional(),
    martinMultiplier: z.boolean().optional(),
    defaultSize: z.boolean().optional(),
    maxSize: z.boolean().optional(),
    targetProfit: z.boolean().optional(),
    leverage: z.boolean().optional(),
    timeframe: z.boolean().optional(),
    enabled: z.boolean().optional(),
    rsiLength: z.boolean().optional(),
    trend: z.boolean().optional(),
    box: z.boolean().optional(),
    tradingBots: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StrategyConfigSelect>;

export const StrategyConfigFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    name: z.boolean().optional(),
    kind: z.boolean().optional(),
    useMartin: z.boolean().optional(),
    martinMultiplier: z.boolean().optional(),
    defaultSize: z.boolean().optional(),
    maxSize: z.boolean().optional(),
    targetProfit: z.boolean().optional(),
    leverage: z.boolean().optional(),
    timeframe: z.boolean().optional(),
    enabled: z.boolean().optional(),
    rsiLength: z.boolean().optional(),
    trend: z.boolean().optional(),
    box: z.boolean().optional(),
    tradingBots: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const StrategyConfigFindManySchema: z.ZodType<Prisma.StrategyConfigFindManyArgs> = z.object({ select: StrategyConfigFindManySelectSchema.optional(), include: z.lazy(() => StrategyConfigIncludeObjectSchema.optional()), orderBy: z.union([StrategyConfigOrderByWithRelationInputObjectSchema, StrategyConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: StrategyConfigWhereInputObjectSchema.optional(), cursor: StrategyConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StrategyConfigScalarFieldEnumSchema, StrategyConfigScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StrategyConfigFindManyArgs>;

export const StrategyConfigFindManyZodSchema = z.object({ select: StrategyConfigFindManySelectSchema.optional(), include: z.lazy(() => StrategyConfigIncludeObjectSchema.optional()), orderBy: z.union([StrategyConfigOrderByWithRelationInputObjectSchema, StrategyConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: StrategyConfigWhereInputObjectSchema.optional(), cursor: StrategyConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StrategyConfigScalarFieldEnumSchema, StrategyConfigScalarFieldEnumSchema.array()]).optional() }).strict();