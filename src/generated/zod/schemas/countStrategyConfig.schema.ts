import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { StrategyConfigOrderByWithRelationInputObjectSchema as StrategyConfigOrderByWithRelationInputObjectSchema } from './objects/StrategyConfigOrderByWithRelationInput.schema';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './objects/StrategyConfigWhereInput.schema';
import { StrategyConfigWhereUniqueInputObjectSchema as StrategyConfigWhereUniqueInputObjectSchema } from './objects/StrategyConfigWhereUniqueInput.schema';
import { StrategyConfigCountAggregateInputObjectSchema as StrategyConfigCountAggregateInputObjectSchema } from './objects/StrategyConfigCountAggregateInput.schema';

export const StrategyConfigCountSchema: z.ZodType<Prisma.StrategyConfigCountArgs> = z.object({ orderBy: z.union([StrategyConfigOrderByWithRelationInputObjectSchema, StrategyConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: StrategyConfigWhereInputObjectSchema.optional(), cursor: StrategyConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StrategyConfigCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StrategyConfigCountArgs>;

export const StrategyConfigCountZodSchema = z.object({ orderBy: z.union([StrategyConfigOrderByWithRelationInputObjectSchema, StrategyConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: StrategyConfigWhereInputObjectSchema.optional(), cursor: StrategyConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StrategyConfigCountAggregateInputObjectSchema ]).optional() }).strict();