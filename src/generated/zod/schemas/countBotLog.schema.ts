import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogOrderByWithRelationInputObjectSchema as BotLogOrderByWithRelationInputObjectSchema } from './objects/BotLogOrderByWithRelationInput.schema';
import { BotLogWhereInputObjectSchema as BotLogWhereInputObjectSchema } from './objects/BotLogWhereInput.schema';
import { BotLogWhereUniqueInputObjectSchema as BotLogWhereUniqueInputObjectSchema } from './objects/BotLogWhereUniqueInput.schema';
import { BotLogCountAggregateInputObjectSchema as BotLogCountAggregateInputObjectSchema } from './objects/BotLogCountAggregateInput.schema';

export const BotLogCountSchema: z.ZodType<Prisma.BotLogCountArgs> = z.object({ orderBy: z.union([BotLogOrderByWithRelationInputObjectSchema, BotLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotLogWhereInputObjectSchema.optional(), cursor: BotLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BotLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BotLogCountArgs>;

export const BotLogCountZodSchema = z.object({ orderBy: z.union([BotLogOrderByWithRelationInputObjectSchema, BotLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotLogWhereInputObjectSchema.optional(), cursor: BotLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BotLogCountAggregateInputObjectSchema ]).optional() }).strict();