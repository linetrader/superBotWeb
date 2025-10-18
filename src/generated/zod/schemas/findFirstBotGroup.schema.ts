import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupIncludeObjectSchema as BotGroupIncludeObjectSchema } from './objects/BotGroupInclude.schema';
import { BotGroupOrderByWithRelationInputObjectSchema as BotGroupOrderByWithRelationInputObjectSchema } from './objects/BotGroupOrderByWithRelationInput.schema';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './objects/BotGroupWhereInput.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './objects/BotGroupWhereUniqueInput.schema';
import { BotGroupScalarFieldEnumSchema } from './enums/BotGroupScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BotGroupFindFirstSelectSchema: z.ZodType<Prisma.BotGroupSelect> = z.object({
    id: z.boolean().optional(),
    botId: z.boolean().optional(),
    bot: z.boolean().optional(),
    key: z.boolean().optional(),
    exchanges: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BotGroupSelect>;

export const BotGroupFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    botId: z.boolean().optional(),
    bot: z.boolean().optional(),
    key: z.boolean().optional(),
    exchanges: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const BotGroupFindFirstSchema: z.ZodType<Prisma.BotGroupFindFirstArgs> = z.object({ select: BotGroupFindFirstSelectSchema.optional(), include: z.lazy(() => BotGroupIncludeObjectSchema.optional()), orderBy: z.union([BotGroupOrderByWithRelationInputObjectSchema, BotGroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotGroupWhereInputObjectSchema.optional(), cursor: BotGroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BotGroupScalarFieldEnumSchema, BotGroupScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupFindFirstArgs>;

export const BotGroupFindFirstZodSchema = z.object({ select: BotGroupFindFirstSelectSchema.optional(), include: z.lazy(() => BotGroupIncludeObjectSchema.optional()), orderBy: z.union([BotGroupOrderByWithRelationInputObjectSchema, BotGroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotGroupWhereInputObjectSchema.optional(), cursor: BotGroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BotGroupScalarFieldEnumSchema, BotGroupScalarFieldEnumSchema.array()]).optional() }).strict();