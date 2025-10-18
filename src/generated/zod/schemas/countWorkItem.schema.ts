import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemOrderByWithRelationInputObjectSchema as WorkItemOrderByWithRelationInputObjectSchema } from './objects/WorkItemOrderByWithRelationInput.schema';
import { WorkItemWhereInputObjectSchema as WorkItemWhereInputObjectSchema } from './objects/WorkItemWhereInput.schema';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './objects/WorkItemWhereUniqueInput.schema';
import { WorkItemCountAggregateInputObjectSchema as WorkItemCountAggregateInputObjectSchema } from './objects/WorkItemCountAggregateInput.schema';

export const WorkItemCountSchema: z.ZodType<Prisma.WorkItemCountArgs> = z.object({ orderBy: z.union([WorkItemOrderByWithRelationInputObjectSchema, WorkItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkItemWhereInputObjectSchema.optional(), cursor: WorkItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkItemCountArgs>;

export const WorkItemCountZodSchema = z.object({ orderBy: z.union([WorkItemOrderByWithRelationInputObjectSchema, WorkItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkItemWhereInputObjectSchema.optional(), cursor: WorkItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkItemCountAggregateInputObjectSchema ]).optional() }).strict();