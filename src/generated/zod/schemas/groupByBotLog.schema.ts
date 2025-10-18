import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { BotLogWhereInputObjectSchema as BotLogWhereInputObjectSchema } from './objects/BotLogWhereInput.schema';
import { BotLogOrderByWithAggregationInputObjectSchema as BotLogOrderByWithAggregationInputObjectSchema } from './objects/BotLogOrderByWithAggregationInput.schema';
import { BotLogScalarWhereWithAggregatesInputObjectSchema as BotLogScalarWhereWithAggregatesInputObjectSchema } from './objects/BotLogScalarWhereWithAggregatesInput.schema';
import { BotLogScalarFieldEnumSchema } from './enums/BotLogScalarFieldEnum.schema';
import { BotLogCountAggregateInputObjectSchema as BotLogCountAggregateInputObjectSchema } from './objects/BotLogCountAggregateInput.schema';
import { BotLogMinAggregateInputObjectSchema as BotLogMinAggregateInputObjectSchema } from './objects/BotLogMinAggregateInput.schema';
import { BotLogMaxAggregateInputObjectSchema as BotLogMaxAggregateInputObjectSchema } from './objects/BotLogMaxAggregateInput.schema';

export const BotLogGroupBySchema: z.ZodType<Prisma.BotLogGroupByArgs> = z.object({ where: BotLogWhereInputObjectSchema.optional(), orderBy: z.union([BotLogOrderByWithAggregationInputObjectSchema, BotLogOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BotLogScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BotLogScalarFieldEnumSchema), _count: z.union([ z.literal(true), BotLogCountAggregateInputObjectSchema ]).optional(), _min: BotLogMinAggregateInputObjectSchema.optional(), _max: BotLogMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BotLogGroupByArgs>;

export const BotLogGroupByZodSchema = z.object({ where: BotLogWhereInputObjectSchema.optional(), orderBy: z.union([BotLogOrderByWithAggregationInputObjectSchema, BotLogOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BotLogScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BotLogScalarFieldEnumSchema), _count: z.union([ z.literal(true), BotLogCountAggregateInputObjectSchema ]).optional(), _min: BotLogMinAggregateInputObjectSchema.optional(), _max: BotLogMaxAggregateInputObjectSchema.optional() }).strict();