import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotRuntimeOrderByWithRelationInputObjectSchema as BotRuntimeOrderByWithRelationInputObjectSchema } from './objects/BotRuntimeOrderByWithRelationInput.schema';
import { BotRuntimeWhereInputObjectSchema as BotRuntimeWhereInputObjectSchema } from './objects/BotRuntimeWhereInput.schema';
import { BotRuntimeWhereUniqueInputObjectSchema as BotRuntimeWhereUniqueInputObjectSchema } from './objects/BotRuntimeWhereUniqueInput.schema';
import { BotRuntimeCountAggregateInputObjectSchema as BotRuntimeCountAggregateInputObjectSchema } from './objects/BotRuntimeCountAggregateInput.schema';

export const BotRuntimeCountSchema: z.ZodType<Prisma.BotRuntimeCountArgs> = z.object({ orderBy: z.union([BotRuntimeOrderByWithRelationInputObjectSchema, BotRuntimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotRuntimeWhereInputObjectSchema.optional(), cursor: BotRuntimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BotRuntimeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.BotRuntimeCountArgs>;

export const BotRuntimeCountZodSchema = z.object({ orderBy: z.union([BotRuntimeOrderByWithRelationInputObjectSchema, BotRuntimeOrderByWithRelationInputObjectSchema.array()]).optional(), where: BotRuntimeWhereInputObjectSchema.optional(), cursor: BotRuntimeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), BotRuntimeCountAggregateInputObjectSchema ]).optional() }).strict();