import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptSelectObjectSchema as WorkAttemptSelectObjectSchema } from './objects/WorkAttemptSelect.schema';
import { WorkAttemptIncludeObjectSchema as WorkAttemptIncludeObjectSchema } from './objects/WorkAttemptInclude.schema';
import { WorkAttemptCreateInputObjectSchema as WorkAttemptCreateInputObjectSchema } from './objects/WorkAttemptCreateInput.schema';
import { WorkAttemptUncheckedCreateInputObjectSchema as WorkAttemptUncheckedCreateInputObjectSchema } from './objects/WorkAttemptUncheckedCreateInput.schema';

export const WorkAttemptCreateOneSchema: z.ZodType<Prisma.WorkAttemptCreateArgs> = z.object({ select: WorkAttemptSelectObjectSchema.optional(), include: WorkAttemptIncludeObjectSchema.optional(), data: z.union([WorkAttemptCreateInputObjectSchema, WorkAttemptUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkAttemptCreateArgs>;

export const WorkAttemptCreateOneZodSchema = z.object({ select: WorkAttemptSelectObjectSchema.optional(), include: WorkAttemptIncludeObjectSchema.optional(), data: z.union([WorkAttemptCreateInputObjectSchema, WorkAttemptUncheckedCreateInputObjectSchema]) }).strict();