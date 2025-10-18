import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogOrderByWithRelationInputObjectSchema as BotLogOrderByWithRelationInputObjectSchema } from './objects/BotLogOrderByWithRelationInput.schema';
import { BotLogWhereInputObjectSchema as BotLogWhereInputObjectSchema } from './objects/BotLogWhereInput.schema';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './objects/BotLogWhereUniqueInput.schema';
import { BotLogCountAggregateInputObjectSchema as BotLogCountAggregateInputObjectSchema } from './objects/BotLogCountAggregateInput.schema';
import { BotLogMinAggregateInputObjectSchema as BotLogMinAggregateInputObjectSchema } from './objects/BotLogMinAggregateInput.schema';
import { BotLogMaxAggregateInputObjectSchema as BotLogMaxAggregateInputObjectSchema } from './objects/BotLogMaxAggregateInput.schema';

export const BotLogAggregateSchema: z.ZodType<Prisma.BotLogAggregateArgs> = z.object({ orderBy: z.union([BotLogOrderByWithRelationInputObjectSchema, BotLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotLogWhereInputObjectSchema.optional(), cursor: BotLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BotLogCountAggregateInputObjectSchema ]).optional(), _min: BotLogMinAggregateInputObjectSchema.optional(), _max: BotLogMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotLogAggregateArgs>;

export const BotLogAggregateZodSchema = z.object({ orderBy: z.union([BotLogOrderByWithRelationInputObjectSchema, BotLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotLogWhereInputObjectSchema.optional(), cursor: BotLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), BotLogCountAggregateInputObjectSchema ]).optional(), _min: BotLogMinAggregateInputObjectSchema.optional(), _max: BotLogMaxAggregateInputObjectSchema.optional() }).strict();