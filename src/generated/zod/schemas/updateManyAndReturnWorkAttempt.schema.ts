import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptSelectObjectSchema as WorkAttemptSelectObjectSchema } from './objects/WorkAttemptSelect.schema';
import { WorkAttemptUpdateManyMutationInputObjectSchema as WorkAttemptUpdateManyMutationInputObjectSchema } from './objects/WorkAttemptUpdateManyMutationInput.schema';
import { WorkAttemptWhereInputObjectSchema as WorkAttemptWhereInputObjectSchema } from './objects/WorkAttemptWhereInput.schema';

export const WorkAttemptUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkAttemptUpdateManyAndReturnArgs> = z.object({ select: WorkAttemptSelectObjectSchema.optional(), data: WorkAttemptUpdateManyMutationInputObjectSchema, where: WorkAttemptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkAttemptUpdateManyAndReturnArgs>;

export const WorkAttemptUpdateManyAndReturnZodSchema = z.object({ select: WorkAttemptSelectObjectSchema.optional(), data: WorkAttemptUpdateManyMutationInputObjectSchema, where: WorkAttemptWhereInputObjectSchema.optional() }).strict();