import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptOrderByWithRelationInputObjectSchema as WorkAttemptOrderByWithRelationInputObjectSchema } from './objects/WorkAttemptOrderByWithRelationInput.schema';
import { WorkAttemptWhereInputObjectSchema as WorkAttemptWhereInputObjectSchema } from './objects/WorkAttemptWhereInput.schema';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './objects/WorkAttemptWhereUniqueInput.schema';
import { WorkAttemptCountAggregateInputObjectSchema as WorkAttemptCountAggregateInputObjectSchema } from './objects/WorkAttemptCountAggregateInput.schema';

export const WorkAttemptCountSchema: z.ZodType<Prisma.WorkAttemptCountArgs> = z.object({ orderBy: z.union([WorkAttemptOrderByWithRelationInputObjectSchema, WorkAttemptOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkAttemptWhereInputObjectSchema.optional(), cursor: WorkAttemptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkAttemptCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkAttemptCountArgs>;

export const WorkAttemptCountZodSchema = z.object({ orderBy: z.union([WorkAttemptOrderByWithRelationInputObjectSchema, WorkAttemptOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkAttemptWhereInputObjectSchema.optional(), cursor: WorkAttemptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkAttemptCountAggregateInputObjectSchema ]).optional() }).strict();