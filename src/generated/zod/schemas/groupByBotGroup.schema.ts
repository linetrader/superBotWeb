import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './objects/BotGroupWhereInput.schema';
import { BotGroupOrderByWithAggregationInputObjectSchema as BotGroupOrderByWithAggregationInputObjectSchema } from './objects/BotGroupOrderByWithAggregationInput.schema';
import { BotGroupScalarWhereWithAggregatesInputObjectSchema as BotGroupScalarWhereWithAggregatesInputObjectSchema } from './objects/BotGroupScalarWhereWithAggregatesInput.schema';
import { BotGroupScalarFieldEnumSchema } from './enums/BotGroupScalarFieldEnum.schema';
import { BotGroupCountAggregateInputObjectSchema as BotGroupCountAggregateInputObjectSchema } from './objects/BotGroupCountAggregateInput.schema';
import { BotGroupMinAggregateInputObjectSchema as BotGroupMinAggregateInputObjectSchema } from './objects/BotGroupMinAggregateInput.schema';
import { BotGroupMaxAggregateInputObjectSchema as BotGroupMaxAggregateInputObjectSchema } from './objects/BotGroupMaxAggregateInput.schema';

export const BotGroupGroupBySchema: z.ZodType<Prisma.BotGroupGroupByArgs> = z.object({ where: BotGroupWhereInputObjectSchema.optional(), orderBy: z.union([BotGroupOrderByWithAggregationInputObjectSchema, BotGroupOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BotGroupScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BotGroupScalarFieldEnumSchema), _count: z.union([ z.literal(true), BotGroupCountAggregateInputObjectSchema ]).optional(), _min: BotGroupMinAggregateInputObjectSchema.optional(), _max: BotGroupMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotGroupGroupByArgs>;

export const BotGroupGroupByZodSchema = z.object({ where: BotGroupWhereInputObjectSchema.optional(), orderBy: z.union([BotGroupOrderByWithAggregationInputObjectSchema, BotGroupOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BotGroupScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BotGroupScalarFieldEnumSchema), _count: z.union([ z.literal(true), BotGroupCountAggregateInputObjectSchema ]).optional(), _min: BotGroupMinAggregateInputObjectSchema.optional(), _max: BotGroupMaxAggregateInputObjectSchema.optional() }).strict();