import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogIncludeObjectSchema as BotLogIncludeObjectSchema } from './objects/BotLogInclude.schema';
import { BotLogOrderByWithRelationInputObjectSchema as BotLogOrderByWithRelationInputObjectSchema } from './objects/BotLogOrderByWithRelationInput.schema';
import { BotLogWhereInputObjectSchema as BotLogWhereInputObjectSchema } from './objects/BotLogWhereInput.schema';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './objects/BotLogWhereUniqueInput.schema';
import { BotLogScalarFieldEnumSchema } from './enums/BotLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BotLogFindFirstOrThrowSelectSchema: z.ZodType<Prisma.BotLogSelect> = z.object({
    id: z.boolean().optional(),
    botId: z.boolean().optional(),
    bot: z.boolean().optional(),
    level: z.boolean().optional(),
    message: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BotLogSelect>;

export const BotLogFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    botId: z.boolean().optional(),
    bot: z.boolean().optional(),
    level: z.boolean().optional(),
    message: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const BotLogFindFirstOrThrowSchema: z.ZodType<Prisma.BotLogFindFirstOrThrowArgs> = z.object({ select: BotLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BotLogIncludeObjectSchema.optional()), orderBy: z.union([BotLogOrderByWithRelationInputObjectSchema, BotLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotLogWhereInputObjectSchema.optional(), cursor: BotLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BotLogScalarFieldEnumSchema, BotLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BotLogFindFirstOrThrowArgs>;

export const BotLogFindFirstOrThrowZodSchema = z.object({ select: BotLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BotLogIncludeObjectSchema.optional()), orderBy: z.union([BotLogOrderByWithRelationInputObjectSchema, BotLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotLogWhereInputObjectSchema.optional(), cursor: BotLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BotLogScalarFieldEnumSchema, BotLogScalarFieldEnumSchema.array()]).optional() }).strict();