import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemIncludeObjectSchema as WorkItemIncludeObjectSchema } from './objects/WorkItemInclude.schema';
import { WorkItemOrderByWithRelationInputObjectSchema as WorkItemOrderByWithRelationInputObjectSchema } from './objects/WorkItemOrderByWithRelationInput.schema';
import { WorkItemWhereInputObjectSchema as WorkItemWhereInputObjectSchema } from './objects/WorkItemWhereInput.schema';
import { WorkItemWhereUniqueInputObjectSchema as WorkItemWhereUniqueInputObjectSchema } from './objects/WorkItemWhereUniqueInput.schema';
import { WorkItemScalarFieldEnumSchema } from './enums/WorkItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkItemFindManySelectSchema: z.ZodType<Prisma.WorkItemSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    botId: z.boolean().optional(),
    bot: z.boolean().optional(),
    type: z.boolean().optional(),
    status: z.boolean().optional(),
    dedupeKey: z.boolean().optional(),
    sqsMessageId: z.boolean().optional(),
    sqsGroupId: z.boolean().optional(),
    payload: z.boolean().optional(),
    attempts: z.boolean().optional(),
    nextVisibleAt: z.boolean().optional(),
    runs: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkItemSelect>;

export const WorkItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    botId: z.boolean().optional(),
    bot: z.boolean().optional(),
    type: z.boolean().optional(),
    status: z.boolean().optional(),
    dedupeKey: z.boolean().optional(),
    sqsMessageId: z.boolean().optional(),
    sqsGroupId: z.boolean().optional(),
    payload: z.boolean().optional(),
    attempts: z.boolean().optional(),
    nextVisibleAt: z.boolean().optional(),
    runs: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const WorkItemFindManySchema: z.ZodType<Prisma.WorkItemFindManyArgs> = z.object({ select: WorkItemFindManySelectSchema.optional(), include: z.lazy(() => WorkItemIncludeObjectSchema.optional()), orderBy: z.union([WorkItemOrderByWithRelationInputObjectSchema, WorkItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkItemWhereInputObjectSchema.optional(), cursor: WorkItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkItemScalarFieldEnumSchema, WorkItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkItemFindManyArgs>;

export const WorkItemFindManyZodSchema = z.object({ select: WorkItemFindManySelectSchema.optional(), include: z.lazy(() => WorkItemIncludeObjectSchema.optional()), orderBy: z.union([WorkItemOrderByWithRelationInputObjectSchema, WorkItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkItemWhereInputObjectSchema.optional(), cursor: WorkItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkItemScalarFieldEnumSchema, WorkItemScalarFieldEnumSchema.array()]).optional() }).strict();