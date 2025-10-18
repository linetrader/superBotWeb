import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptSelectObjectSchema as WorkAttemptSelectObjectSchema } from './objects/WorkAttemptSelect.schema';
import { WorkAttemptIncludeObjectSchema as WorkAttemptIncludeObjectSchema } from './objects/WorkAttemptInclude.schema';
import { WorkAttemptWhereUniqueInputObjectSchema as WorkAttemptWhereUniqueInputObjectSchema } from './objects/WorkAttemptWhereUniqueInput.schema';
import { WorkAttemptCreateInputObjectSchema as WorkAttemptCreateInputObjectSchema } from './objects/WorkAttemptCreateInput.schema';
import { WorkAttemptUncheckedCreateInputObjectSchema as WorkAttemptUncheckedCreateInputObjectSchema } from './objects/WorkAttemptUncheckedCreateInput.schema';
import { WorkAttemptUpdateInputObjectSchema as WorkAttemptUpdateInputObjectSchema } from './objects/WorkAttemptUpdateInput.schema';
import { WorkAttemptUncheckedUpdateInputObjectSchema as WorkAttemptUncheckedUpdateInputObjectSchema } from './objects/WorkAttemptUncheckedUpdateInput.schema';

export const WorkAttemptUpsertOneSchema: z.ZodType<Prisma.WorkAttemptUpsertArgs> = z.object({ select: WorkAttemptSelectObjectSchema.optional(), include: WorkAttemptIncludeObjectSchema.optional(), where: WorkAttemptWhereUniqueInputObjectSchema, create: z.union([ WorkAttemptCreateInputObjectSchema, WorkAttemptUncheckedCreateInputObjectSchema ]), update: z.union([ WorkAttemptUpdateInputObjectSchema, WorkAttemptUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkAttemptUpsertArgs>;

export const WorkAttemptUpsertOneZodSchema = z.object({ select: WorkAttemptSelectObjectSchema.optional(), include: WorkAttemptIncludeObjectSchema.optional(), where: WorkAttemptWhereUniqueInputObjectSchema, create: z.union([ WorkAttemptCreateInputObjectSchema, WorkAttemptUncheckedCreateInputObjectSchema ]), update: z.union([ WorkAttemptUpdateInputObjectSchema, WorkAttemptUncheckedUpdateInputObjectSchema ]) }).strict();