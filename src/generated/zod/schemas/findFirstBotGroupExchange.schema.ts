import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupExchangeIncludeObjectSchema as BotGroupExchangeIncludeObjectSchema } from './objects/BotGroupExchangeInclude.schema';
import { BotGroupExchangeOrderByWithRelationInputObjectSchema as BotGroupExchangeOrderByWithRelationInputObjectSchema } from './objects/BotGroupExchangeOrderByWithRelationInput.schema';
import { BotGroupExchangeWhereInputObjectSchema as BotGroupExchangeWhereInputObjectSchema } from './objects/BotGroupExchangeWhereInput.schema';
import { BotGroupExchangeWhereUniqueInputObjectSchema as BotGroupExchangeWhereUniqueInputObjectSchema } from './objects/BotGroupExchangeWhereUniqueInput.schema';
import { BotGroupExchangeScalarFieldEnumSchema } from './enums/BotGroupExchangeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BotGroupExchangeFindFirstSelectSchema: z.ZodType<Prisma.BotGroupExchangeSelect> = z.object({
    id: z.boolean().optional(),
    groupId: z.boolean().optional(),
    group: z.boolean().optional(),
    exchangeMarketId: z.boolean().optional(),
    exchangeMarket: z.boolean().optional(),
    enabled: z.boolean().optional(),
    allocationBps: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeSelect>;

export const BotGroupExchangeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    groupId: z.boolean().optional(),
    group: z.boolean().optional(),
    exchangeMarketId: z.boolean().optional(),
    exchangeMarket: z.boolean().optional(),
    enabled: z.boolean().optional(),
    allocationBps: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const BotGroupExchangeFindFirstSchema: z.ZodType<Prisma.BotGroupExchangeFindFirstArgs> = z.object({ select: BotGroupExchangeFindFirstSelectSchema.optional(), include: z.lazy(() => BotGroupExchangeIncludeObjectSchema.optional()), orderBy: z.union([BotGroupExchangeOrderByWithRelationInputObjectSchema, BotGroupExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotGroupExchangeWhereInputObjectSchema.optional(), cursor: BotGroupExchangeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BotGroupExchangeScalarFieldEnumSchema, BotGroupExchangeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupExchangeFindFirstArgs>;

export const BotGroupExchangeFindFirstZodSchema = z.object({ select: BotGroupExchangeFindFirstSelectSchema.optional(), include: z.lazy(() => BotGroupExchangeIncludeObjectSchema.optional()), orderBy: z.union([BotGroupExchangeOrderByWithRelationInputObjectSchema, BotGroupExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotGroupExchangeWhereInputObjectSchema.optional(), cursor: BotGroupExchangeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BotGroupExchangeScalarFieldEnumSchema, BotGroupExchangeScalarFieldEnumSchema.array()]).optional() }).strict();