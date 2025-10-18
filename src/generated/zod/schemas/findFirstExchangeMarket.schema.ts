import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketIncludeObjectSchema as ExchangeMarketIncludeObjectSchema } from './objects/ExchangeMarketInclude.schema';
import { ExchangeMarketOrderByWithRelationInputObjectSchema as ExchangeMarketOrderByWithRelationInputObjectSchema } from './objects/ExchangeMarketOrderByWithRelationInput.schema';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './objects/ExchangeMarketWhereInput.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './objects/ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketScalarFieldEnumSchema } from './enums/ExchangeMarketScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ExchangeMarketFindFirstSelectSchema: z.ZodType<Prisma.ExchangeMarketSelect> = z.object({
    id: z.boolean().optional(),
    exchangeId: z.boolean().optional(),
    exchange: z.boolean().optional(),
    code: z.boolean().optional(),
    name: z.boolean().optional(),
    restBaseUrl: z.boolean().optional(),
    wsBaseUrl: z.boolean().optional(),
    active: z.boolean().optional(),
    bots: z.boolean().optional(),
    groupExchanges: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketSelect>;

export const ExchangeMarketFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    exchangeId: z.boolean().optional(),
    exchange: z.boolean().optional(),
    code: z.boolean().optional(),
    name: z.boolean().optional(),
    restBaseUrl: z.boolean().optional(),
    wsBaseUrl: z.boolean().optional(),
    active: z.boolean().optional(),
    bots: z.boolean().optional(),
    groupExchanges: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ExchangeMarketFindFirstSchema: z.ZodType<Prisma.ExchangeMarketFindFirstArgs> = z.object({ select: ExchangeMarketFindFirstSelectSchema.optional(), include: z.lazy(() => ExchangeMarketIncludeObjectSchema.optional()), orderBy: z.union([ExchangeMarketOrderByWithRelationInputObjectSchema, ExchangeMarketOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeMarketWhereInputObjectSchema.optional(), cursor: ExchangeMarketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ExchangeMarketScalarFieldEnumSchema, ExchangeMarketScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketFindFirstArgs>;

export const ExchangeMarketFindFirstZodSchema = z.object({ select: ExchangeMarketFindFirstSelectSchema.optional(), include: z.lazy(() => ExchangeMarketIncludeObjectSchema.optional()), orderBy: z.union([ExchangeMarketOrderByWithRelationInputObjectSchema, ExchangeMarketOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeMarketWhereInputObjectSchema.optional(), cursor: ExchangeMarketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ExchangeMarketScalarFieldEnumSchema, ExchangeMarketScalarFieldEnumSchema.array()]).optional() }).strict();