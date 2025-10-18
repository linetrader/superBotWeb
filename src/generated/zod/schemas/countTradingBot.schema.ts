import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { TradingBotOrderByWithRelationInputObjectSchema as TradingBotOrderByWithRelationInputObjectSchema } from './objects/TradingBotOrderByWithRelationInput.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './objects/TradingBotWhereInput.schema';
import { TradingBotWhereUniqueInputObjectSchema as TradingBotWhereUniqueInputObjectSchema } from './objects/TradingBotWhereUniqueInput.schema';
import { TradingBotCountAggregateInputObjectSchema as TradingBotCountAggregateInputObjectSchema } from './objects/TradingBotCountAggregateInput.schema';

export const TradingBotCountSchema: z.ZodType<Prisma.TradingBotCountArgs> = z.object({ orderBy: z.union([TradingBotOrderByWithRelationInputObjectSchema, TradingBotOrderByWithRelationInputObjectSchema.array()]).optional(), where: TradingBotWhereInputObjectSchema.optional(), cursor: TradingBotWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TradingBotCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TradingBotCountArgs>;

export const TradingBotCountZodSchema = z.object({ orderBy: z.union([TradingBotOrderByWithRelationInputObjectSchema, TradingBotOrderByWithRelationInputObjectSchema.array()]).optional(), where: TradingBotWhereInputObjectSchema.optional(), cursor: TradingBotWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TradingBotCountAggregateInputObjectSchema ]).optional() }).strict();