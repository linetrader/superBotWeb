import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeOrderByWithRelationInputObjectSchema as ExchangeOrderByWithRelationInputObjectSchema } from './objects/ExchangeOrderByWithRelationInput.schema';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './objects/ExchangeWhereInput.schema';
import { ExchangeWhereUniqueInputObjectSchema as ExchangeWhereUniqueInputObjectSchema } from './objects/ExchangeWhereUniqueInput.schema';
import { ExchangeCountAggregateInputObjectSchema as ExchangeCountAggregateInputObjectSchema } from './objects/ExchangeCountAggregateInput.schema';

export const ExchangeCountSchema: z.ZodType<Prisma.ExchangeCountArgs> = z.object({ orderBy: z.union([ExchangeOrderByWithRelationInputObjectSchema, ExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeWhereInputObjectSchema.optional(), cursor: ExchangeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ExchangeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeCountArgs>;

export const ExchangeCountZodSchema = z.object({ orderBy: z.union([ExchangeOrderByWithRelationInputObjectSchema, ExchangeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeWhereInputObjectSchema.optional(), cursor: ExchangeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ExchangeCountAggregateInputObjectSchema ]).optional() }).strict();