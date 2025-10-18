import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeIncludeObjectSchema as ExchangeIncludeObjectSchema } from './objects/ExchangeInclude.schema';
import { ExchangeOrderByWithRelationInputObjectSchema as ExchangeOrderByWithRelationInputObjectSchema } from './objects/ExchangeOrderByWithRelationInput.schema';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './objects/ExchangeWhereInput.schema';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './objects/ExchangeWhereUniqueInput.schema';
import { ExchangeScalarFieldEnumSchema } from './enums/ExchangeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ExchangeFindFirstSelectSchema: z.ZodType<Prisma.ExchangeSelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    name: z.boolean().optional(),
    active: z.boolean().optional(),
    supportsFutures: z.boolean().optional(),
    markets: z.boolean().optional(),
    credentials: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ExchangeSelect>;

export const ExchangeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    name: z.boolean().optional(),
    active: z.boolean().optional(),
    supportsFutures: z.boolean().optional(),
    markets: z.boolean().optional(),
    credentials: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ExchangeFindFirstSchema: z.ZodType<Prisma.ExchangeFindFirstArgs> = z.object({ select: ExchangeFindFirstSelectSchema.optional(), include: z.lazy(() => ExchangeIncludeObjectSchema.optional()), orderBy: z.union([ExchangeOrderByWithRelationInputObjectSchema, ExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeWhereInputObjectSchema.optional(), cursor: ExchangeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ExchangeScalarFieldEnumSchema, ExchangeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeFindFirstArgs>;

export const ExchangeFindFirstZodSchema = z.object({ select: ExchangeFindFirstSelectSchema.optional(), include: z.lazy(() => ExchangeIncludeObjectSchema.optional()), orderBy: z.union([ExchangeOrderByWithRelationInputObjectSchema, ExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeWhereInputObjectSchema.optional(), cursor: ExchangeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ExchangeScalarFieldEnumSchema, ExchangeScalarFieldEnumSchema.array()]).optional() }).strict();