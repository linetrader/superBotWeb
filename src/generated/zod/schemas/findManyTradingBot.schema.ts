import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotIncludeObjectSchema as TradingBotIncludeObjectSchema } from './objects/TradingBotInclude.schema';
import { TradingBotOrderByWithRelationInputObjectSchema as TradingBotOrderByWithRelationInputObjectSchema } from './objects/TradingBotOrderByWithRelationInput.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './objects/TradingBotWhereInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './objects/TradingBotWhereUniqueInput.schema';
import { TradingBotScalarFieldEnumSchema } from './enums/TradingBotScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TradingBotFindManySelectSchema: z.ZodType<Prisma.TradingBotSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    mode: z.boolean().optional(),
    exchangeMarketId: z.boolean().optional(),
    exchangeMarket: z.boolean().optional(),
    singleMarketKind: z.boolean().optional(),
    symbol: z.boolean().optional(),
    strategyConfigId: z.boolean().optional(),
    strategyConfig: z.boolean().optional(),
    enabled: z.boolean().optional(),
    BotLog: z.boolean().optional(),
    BotRuntime: z.boolean().optional(),
    workItems: z.boolean().optional(),
    groups: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TradingBotSelect>;

export const TradingBotFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    mode: z.boolean().optional(),
    exchangeMarketId: z.boolean().optional(),
    exchangeMarket: z.boolean().optional(),
    singleMarketKind: z.boolean().optional(),
    symbol: z.boolean().optional(),
    strategyConfigId: z.boolean().optional(),
    strategyConfig: z.boolean().optional(),
    enabled: z.boolean().optional(),
    BotLog: z.boolean().optional(),
    BotRuntime: z.boolean().optional(),
    workItems: z.boolean().optional(),
    groups: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TradingBotFindManySchema: z.ZodType<Prisma.TradingBotFindManyArgs> = z.object({ select: TradingBotFindManySelectSchema.optional(), include: z.lazy(() => TradingBotIncludeObjectSchema.optional()), orderBy: z.union([TradingBotOrderByWithRelationInputObjectSchema, TradingBotOrderByWithRelationInputObjectSchema.array()]).optional(), where: TradingBotWhereInputObjectSchema.optional(), cursor: TradingBotWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TradingBotScalarFieldEnumSchema, TradingBotScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TradingBotFindManyArgs>;

export const TradingBotFindManyZodSchema = z.object({ select: TradingBotFindManySelectSchema.optional(), include: z.lazy(() => TradingBotIncludeObjectSchema.optional()), orderBy: z.union([TradingBotOrderByWithRelationInputObjectSchema, TradingBotOrderByWithRelationInputObjectSchema.array()]).optional(), where: TradingBotWhereInputObjectSchema.optional(), cursor: TradingBotWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TradingBotScalarFieldEnumSchema, TradingBotScalarFieldEnumSchema.array()]).optional() }).strict();