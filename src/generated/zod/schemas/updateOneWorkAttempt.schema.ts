import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptSelectObjectSchema as WorkAttemptSelectObjectSchema } from './objects/WorkAttemptSelect.schema';
import { WorkAttemptIncludeObjectSchema as WorkAttemptIncludeObjectSchema } from './objects/WorkAttemptInclude.schema';
import { WorkAttemptUpdateInputObjectSchema as WorkAttemptUpdateInputObjectSchema } from './objects/WorkAttemptUpdateInput.schema';
import { WorkAttemptUncheckedUpdateInputObjectSchema as WorkAttemptUncheckedUpdateInputObjectSchema } from './objects/WorkAttemptUncheckedUpdateInput.schema';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './objects/WorkAttemptWhereUniqueInput.schema';

export const WorkAttemptUpdateOneSchema: z.ZodType<Prisma.WorkAttemptUpdateArgs> = z.object({ select: WorkAttemptSelectObjectSchema.optional(), include: WorkAttemptIncludeObjectSchema.optional(), data: z.union([WorkAttemptUpdateInputObjectSchema, WorkAttemptUncheckedUpdateInputObjectSchema]), where: WorkAttemptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkAttemptUpdateArgs>;

export const WorkAttemptUpdateOneZodSchema = z.object({ select: WorkAttemptSelectObjectSchema.optional(), include: WorkAttemptIncludeObjectSchema.optional(), data: z.union([WorkAttemptUpdateInputObjectSchema, WorkAttemptUncheckedUpdateInputObjectSchema]), where: WorkAttemptWhereUniqueInputObjectSchema }).strict();