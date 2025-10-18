import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupOrderByWithRelationInputObjectSchema as BotGroupOrderByWithRelationInputObjectSchema } from './objects/BotGroupOrderByWithRelationInput.schema';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './objects/BotGroupWhereInput.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './objects/BotGroupWhereUniqueInput.schema';
import { BotGroupCountAggregateInputObjectSchema as BotGroupCountAggregateInputObjectSchema } from './objects/BotGroupCountAggregateInput.schema';
import { BotGroupMinAggregateInputObjectSchema as BotGroupMinAggregateInputObjectSchema } from './objects/BotGroupMinAggregateInput.schema';
import { BotGroupMaxAggregateInputObjectSchema as BotGroupMaxAggregateInputObjectSchema } from './objects/BotGroupMaxAggregateInput.schema';

export const BotGroupAggregateSchema: z.ZodType<Prisma.BotGroupAggregateArgs> = z.object({ orderBy: z.union([BotGroupOrderByWithRelationInputObjectSchema, BotGroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotGroupWhereInputObjectSchema.optional(), cursor: BotGroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BotGroupCountAggregateInputObjectSchema ]).optional(), _min: BotGroupMinAggregateInputObjectSchema.optional(), _max: BotGroupMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupAggregateArgs>;

export const BotGroupAggregateZodSchema = z.object({ orderBy: z.union([BotGroupOrderByWithRelationInputObjectSchema, BotGroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotGroupWhereInputObjectSchema.optional(), cursor: BotGroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BotGroupCountAggregateInputObjectSchema ]).optional(), _min: BotGroupMinAggregateInputObjectSchema.optional(), _max: BotGroupMaxAggregateInputObjectSchema.optional() }).strict();