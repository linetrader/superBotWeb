import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BoxStrategyOrderByWithRelationInputObjectSchema as BoxStrategyOrderByWithRelationInputObjectSchema } from './objects/BoxStrategyOrderByWithRelationInput.schema';
import { BoxStrategyWhereInputObjectSchema as BoxStrategyWhereInputObjectSchema } from './objects/BoxStrategyWhereInput.schema';
import { BoxStrategyWhereUniqueInputObjectSchema as BoxStrategyWhereUniqueInputObjectSchema } from './objects/BoxStrategyWhereUniqueInput.schema';
import { BoxStrategyCountAggregateInputObjectSchema as BoxStrategyCountAggregateInputObjectSchema } from './objects/BoxStrategyCountAggregateInput.schema';

export const BoxStrategyCountSchema: z.ZodType<Prisma.BoxStrategyCountArgs> = z.object({ orderBy: z.union([BoxStrategyOrderByWithRelationInputObjectSchema, BoxStrategyOrderByWithRelationInputObjectSchema.array()]).optional(), where: BoxStrategyWhereInputObjectSchema.optional(), cursor: BoxStrategyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BoxStrategyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BoxStrategyCountArgs>;

export const BoxStrategyCountZodSchema = z.object({ orderBy: z.union([BoxStrategyOrderByWithRelationInputObjectSchema, BoxStrategyOrderByWithRelationInputObjectSchema.array()]).optional(), where: BoxStrategyWhereInputObjectSchema.optional(), cursor: BoxStrategyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BoxStrategyCountAggregateInputObjectSchema ]).optional() }).strict();