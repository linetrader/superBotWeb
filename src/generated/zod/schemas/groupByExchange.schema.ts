import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './objects/ExchangeWhereInput.schema';
import { ExchangeOrderByWithAggregationInputObjectSchema as ExchangeOrderByWithAggregationInputObjectSchema } from './objects/ExchangeOrderByWithAggregationInput.schema';
import { ExchangeScalarWhereWithAggregatesInputObjectSchema as ExchangeScalarWhereWithAggregatesInputObjectSchema } from './objects/ExchangeScalarWhereWithAggregatesInput.schema';
import { ExchangeScalarFieldEnumSchema } from './enums/ExchangeScalarFieldEnum.schema';
import { ExchangeCountAggregateInputObjectSchema as ExchangeCountAggregateInputObjectSchema } from './objects/ExchangeCountAggregateInput.schema';
import { ExchangeMinAggregateInputObjectSchema as ExchangeMinAggregateInputObjectSchema } from './objects/ExchangeMinAggregateInput.schema';
import { ExchangeMaxAggregateInputObjectSchema as ExchangeMaxAggregateInputObjectSchema } from './objects/ExchangeMaxAggregateInput.schema';

export const ExchangeGroupBySchema: z.ZodType<Prisma.ExchangeGroupByArgs> = z.object({ where: ExchangeWhereInputObjectSchema.optional(), orderBy: z.union([ExchangeOrderByWithAggregationInputObjectSchema, ExchangeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ExchangeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ExchangeScalarFieldEnumSchema), _count: z.union([ z.literal(true), ExchangeCountAggregateInputObjectSchema ]).optional(), _min: ExchangeMinAggregateInputObjectSchema.optional(), _max: ExchangeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeGroupByArgs>;

export const ExchangeGroupByZodSchema = z.object({ where: ExchangeWhereInputObjectSchema.optional(), orderBy: z.union([ExchangeOrderByWithAggregationInputObjectSchema, ExchangeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ExchangeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ExchangeScalarFieldEnumSchema), _count: z.union([ z.literal(true), ExchangeCountAggregateInputObjectSchema ]).optional(), _min: ExchangeMinAggregateInputObjectSchema.optional(), _max: ExchangeMaxAggregateInputObjectSchema.optional() }).strict();