import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptWhereInputObjectSchema as WorkAttemptWhereInputObjectSchema } from './objects/WorkAttemptWhereInput.schema';

export const WorkAttemptDeleteManySchema: z.ZodType<Prisma.WorkAttemptDeleteManyArgs> = z.object({ where: WorkAttemptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkAttemptDeleteManyArgs>;

export const WorkAttemptDeleteManyZodSchema = z.object({ where: WorkAttemptWhereInputObjectSchema.optional() }).strict();