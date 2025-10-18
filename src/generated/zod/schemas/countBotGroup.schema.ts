import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupOrderByWithRelationInputObjectSchema as BotGroupOrderByWithRelationInputObjectSchema } from './objects/BotGroupOrderByWithRelationInput.schema';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './objects/BotGroupWhereInput.schema';
import { BotGroupWhereUniqueInputObjectSchema as BotGroupWhereUniqueInputObjectSchema } from './objects/BotGroupWhereUniqueInput.schema';
import { BotGroupCountAggregateInputObjectSchema as BotGroupCountAggregateInputObjectSchema } from './objects/BotGroupCountAggregateInput.schema';

export const BotGroupCountSchema: z.ZodType<Prisma.BotGroupCountArgs> = z.object({ orderBy: z.union([BotGroupOrderByWithRelationInputObjectSchema, BotGroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotGroupWhereInputObjectSchema.optional(), cursor: BotGroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BotGroupCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupCountArgs>;

export const BotGroupCountZodSchema = z.object({ orderBy: z.union([BotGroupOrderByWithRelationInputObjectSchema, BotGroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotGroupWhereInputObjectSchema.optional(), cursor: BotGroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BotGroupCountAggregateInputObjectSchema ]).optional() }).strict();