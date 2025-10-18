import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptUpdateManyMutationInputObjectSchema as WorkAttemptUpdateManyMutationInputObjectSchema } from './objects/WorkAttemptUpdateManyMutationInput.schema';
import { WorkAttemptWhereInputObjectSchema as WorkAttemptWhereInputObjectSchema } from './objects/WorkAttemptWhereInput.schema';

export const WorkAttemptUpdateManySchema: z.ZodType<Prisma.WorkAttemptUpdateManyArgs> = z.object({ data: WorkAttemptUpdateManyMutationInputObjectSchema, where: WorkAttemptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkAttemptUpdateManyArgs>;

export const WorkAttemptUpdateManyZodSchema = z.object({ data: WorkAttemptUpdateManyMutationInputObjectSchema, where: WorkAttemptWhereInputObjectSchema.optional() }).strict();