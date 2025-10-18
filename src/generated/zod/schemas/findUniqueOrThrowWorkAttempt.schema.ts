import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptSelectObjectSchema as WorkAttemptSelectObjectSchema } from './objects/WorkAttemptSelect.schema';
import { WorkAttemptIncludeObjectSchema as WorkAttemptIncludeObjectSchema } from './objects/WorkAttemptInclude.schema';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './objects/WorkAttemptWhereUniqueInput.schema';

export const WorkAttemptFindUniqueOrThrowSchema: z.ZodType<Prisma.WorkAttemptFindUniqueOrThrowArgs> = z.object({ select: WorkAttemptSelectObjectSchema.optional(), include: WorkAttemptIncludeObjectSchema.optional(), where: WorkAttemptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkAttemptFindUniqueOrThrowArgs>;

export const WorkAttemptFindUniqueOrThrowZodSchema = z.object({ select: WorkAttemptSelectObjectSchema.optional(), include: WorkAttemptIncludeObjectSchema.optional(), where: WorkAttemptWhereUniqueInputObjectSchema }).strict();