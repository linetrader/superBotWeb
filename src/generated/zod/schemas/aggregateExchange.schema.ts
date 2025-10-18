import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeOrderByWithRelationInputObjectSchema as ExchangeOrderByWithRelationInputObjectSchema } from './objects/ExchangeOrderByWithRelationInput.schema';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './objects/ExchangeWhereInput.schema';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './objects/ExchangeWhereUniqueInput.schema';
import { ExchangeCountAggregateInputObjectSchema as ExchangeCountAggregateInputObjectSchema } from './objects/ExchangeCountAggregateInput.schema';
import { ExchangeMinAggregateInputObjectSchema as ExchangeMinAggregateInputObjectSchema } from './objects/ExchangeMinAggregateInput.schema';
import { ExchangeMaxAggregateInputObjectSchema as ExchangeMaxAggregateInputObjectSchema } from './objects/ExchangeMaxAggregateInput.schema';

export const ExchangeAggregateSchema: z.ZodType<Prisma.ExchangeAggregateArgs> = z.object({ orderBy: z.union([ExchangeOrderByWithRelationInputObjectSchema, ExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeWhereInputObjectSchema.optional(), cursor: ExchangeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ExchangeCountAggregateInputObjectSchema ]).optional(), _min: ExchangeMinAggregateInputObjectSchema.optional(), _max: ExchangeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeAggregateArgs>;

export const ExchangeAggregateZodSchema = z.object({ orderBy: z.union([ExchangeOrderByWithRelationInputObjectSchema, ExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeWhereInputObjectSchema.optional(), cursor: ExchangeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ExchangeCountAggregateInputObjectSchema ]).optional(), _min: ExchangeMinAggregateInputObjectSchema.optional(), _max: ExchangeMaxAggregateInputObjectSchema.optional() }).strict();