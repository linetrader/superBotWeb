import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeOrderByWithRelationInputObjectSchema as ReferralEdgeOrderByWithRelationInputObjectSchema } from './objects/ReferralEdgeOrderByWithRelationInput.schema';
import { ReferralEdgeWhereInputObjectSchema as ReferralEdgeWhereInputObjectSchema } from './objects/ReferralEdgeWhereInput.schema';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './objects/ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeCountAggregateInputObjectSchema as ReferralEdgeCountAggregateInputObjectSchema } from './objects/ReferralEdgeCountAggregateInput.schema';

export const ReferralEdgeCountSchema: z.ZodType<Prisma.ReferralEdgeCountArgs> = z.object({ orderBy: z.union([ReferralEdgeOrderByWithRelationInputObjectSchema, ReferralEdgeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReferralEdgeWhereInputObjectSchema.optional(), cursor: ReferralEdgeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReferralEdgeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeCountArgs>;

export const ReferralEdgeCountZodSchema = z.object({ orderBy: z.union([ReferralEdgeOrderByWithRelationInputObjectSchema, ReferralEdgeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReferralEdgeWhereInputObjectSchema.optional(), cursor: ReferralEdgeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReferralEdgeCountAggregateInputObjectSchema ]).optional() }).strict();