import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeMarketOrderByWithRelationInputObjectSchema as ExchangeMarketOrderByWithRelationInputObjectSchema } from './objects/ExchangeMarketOrderByWithRelationInput.schema';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './objects/ExchangeMarketWhereInput.schema';
import { ExchangeMarketWhereUniqueInputObjectSchema as ExchangeMarketWhereUniqueInputObjectSchema } from './objects/ExchangeMarketWhereUniqueInput.schema';
import { ExchangeMarketCountAggregateInputObjectSchema as ExchangeMarketCountAggregateInputObjectSchema } from './objects/ExchangeMarketCountAggregateInput.schema';

export const ExchangeMarketCountSchema: z.ZodType<Prisma.ExchangeMarketCountArgs> = z.object({ orderBy: z.union([ExchangeMarketOrderByWithRelationInputObjectSchema, ExchangeMarketOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeMarketWhereInputObjectSchema.optional(), cursor: ExchangeMarketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ExchangeMarketCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeMarketCountArgs>;

export const ExchangeMarketCountZodSchema = z.object({ orderBy: z.union([ExchangeMarketOrderByWithRelationInputObjectSchema, ExchangeMarketOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeMarketWhereInputObjectSchema.optional(), cursor: ExchangeMarketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ExchangeMarketCountAggregateInputObjectSchema ]).optional() }).strict();