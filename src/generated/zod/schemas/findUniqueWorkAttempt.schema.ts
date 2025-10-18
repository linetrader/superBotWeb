import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptSelectObjectSchema as WorkAttemptSelectObjectSchema } from './objects/WorkAttemptSelect.schema';
import { WorkAttemptIncludeObjectSchema as WorkAttemptIncludeObjectSchema } from './objects/WorkAttemptInclude.schema';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './objects/WorkAttemptWhereUniqueInput.schema';

export const WorkAttemptFindUniqueSchema: z.ZodType<Prisma.WorkAttemptFindUniqueArgs> = z.object({ select: WorkAttemptSelectObjectSchema.optional(), include: WorkAttemptIncludeObjectSchema.optional(), where: WorkAttemptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkAttemptFindUniqueArgs>;

export const WorkAttemptFindUniqueZodSchema = z.object({ select: WorkAttemptSelectObjectSchema.optional(), include: WorkAttemptIncludeObjectSchema.optional(), where: WorkAttemptWhereUniqueInputObjectSchema }).strict();