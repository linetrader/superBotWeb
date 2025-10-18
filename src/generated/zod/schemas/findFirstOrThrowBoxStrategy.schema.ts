import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategyIncludeObjectSchema as BoxStrategyIncludeObjectSchema } from './objects/BoxStrategyInclude.schema';
import { BoxStrategyOrderByWithRelationInputObjectSchema as BoxStrategyOrderByWithRelationInputObjectSchema } from './objects/BoxStrategyOrderByWithRelationInput.schema';
import { BoxStrategyWhereInputObjectSchema as BoxStrategyWhereInputObjectSchema } from './objects/BoxStrategyWhereInput.schema';
import { BoxStrategyWhereUniqueInputObjectSchema as BoxStrategyWhereUniqueInputObjectSchema } from './objects/BoxStrategyWhereUniqueInput.schema';
import { BoxStrategyScalarFieldEnumSchema } from './enums/BoxStrategyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BoxStrategyFindFirstOrThrowSelectSchema: z.ZodType<Prisma.BoxStrategySelect> = z.object({
    id: z.boolean().optional(),
    strategyConfigId: z.boolean().optional(),
    strategyConfig: z.boolean().optional(),
    lowerTh: z.boolean().optional(),
    upperTh: z.boolean().optional(),
    boxTouchPct: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.BoxStrategySelect>;

export const BoxStrategyFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    strategyConfigId: z.boolean().optional(),
    strategyConfig: z.boolean().optional(),
    lowerTh: z.boolean().optional(),
    upperTh: z.boolean().optional(),
    boxTouchPct: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const BoxStrategyFindFirstOrThrowSchema: z.ZodType<Prisma.BoxStrategyFindFirstOrThrowArgs> = z.object({ select: BoxStrategyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BoxStrategyIncludeObjectSchema.optional()), orderBy: z.union([BoxStrategyOrderByWithRelationInputObjectSchema, BoxStrategyOrderByWithRelationInputObjectSchema.array()]).optional(), where: BoxStrategyWhereInputObjectSchema.optional(), cursor: BoxStrategyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BoxStrategyScalarFieldEnumSchema, BoxStrategyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.BoxStrategyFindFirstOrThrowArgs>;

export const BoxStrategyFindFirstOrThrowZodSchema = z.object({ select: BoxStrategyFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => BoxStrategyIncludeObjectSchema.optional()), orderBy: z.union([BoxStrategyOrderByWithRelationInputObjectSchema, BoxStrategyOrderByWithRelationInputObjectSchema.array()]).optional(), where: BoxStrategyWhereInputObjectSchema.optional(), cursor: BoxStrategyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([BoxStrategyScalarFieldEnumSchema, BoxStrategyScalarFieldEnumSchema.array()]).optional() }).strict();