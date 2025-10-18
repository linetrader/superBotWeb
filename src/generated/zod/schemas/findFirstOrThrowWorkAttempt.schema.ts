import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptIncludeObjectSchema as WorkAttemptIncludeObjectSchema } from './objects/WorkAttemptInclude.schema';
import { WorkAttemptOrderByWithRelationInputObjectSchema as WorkAttemptOrderByWithRelationInputObjectSchema } from './objects/WorkAttemptOrderByWithRelationInput.schema';
import { WorkAttemptWhereInputObjectSchema as WorkAttemptWhereInputObjectSchema } from './objects/WorkAttemptWhereInput.schema';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './objects/WorkAttemptWhereUniqueInput.schema';
import { WorkAttemptScalarFieldEnumSchema } from './enums/WorkAttemptScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkAttemptFindFirstOrThrowSelectSchema: z.ZodType<Prisma.WorkAttemptSelect> = z.object({
    id: z.boolean().optional(),
    workItemId: z.boolean().optional(),
    workItem: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    finishedAt: z.boolean().optional(),
    workerTaskArn: z.boolean().optional(),
    exitCode: z.boolean().optional(),
    error: z.boolean().optional(),
    logsRef: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkAttemptSelect>;

export const WorkAttemptFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    workItemId: z.boolean().optional(),
    workItem: z.boolean().optional(),
    startedAt: z.boolean().optional(),
    finishedAt: z.boolean().optional(),
    workerTaskArn: z.boolean().optional(),
    exitCode: z.boolean().optional(),
    error: z.boolean().optional(),
    logsRef: z.boolean().optional()
  }).strict();

export const WorkAttemptFindFirstOrThrowSchema: z.ZodType<Prisma.WorkAttemptFindFirstOrThrowArgs> = z.object({ select: WorkAttemptFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => WorkAttemptIncludeObjectSchema.optional()), orderBy: z.union([WorkAttemptOrderByWithRelationInputObjectSchema, WorkAttemptOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkAttemptWhereInputObjectSchema.optional(), cursor: WorkAttemptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkAttemptScalarFieldEnumSchema, WorkAttemptScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkAttemptFindFirstOrThrowArgs>;

export const WorkAttemptFindFirstOrThrowZodSchema = z.object({ select: WorkAttemptFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => WorkAttemptIncludeObjectSchema.optional()), orderBy: z.union([WorkAttemptOrderByWithRelationInputObjectSchema, WorkAttemptOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkAttemptWhereInputObjectSchema.optional(), cursor: WorkAttemptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkAttemptScalarFieldEnumSchema, WorkAttemptScalarFieldEnumSchema.array()]).optional() }).strict();