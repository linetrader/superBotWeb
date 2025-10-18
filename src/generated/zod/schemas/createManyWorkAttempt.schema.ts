import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptCreateManyInputObjectSchema as WorkAttemptCreateManyInputObjectSchema } from './objects/WorkAttemptCreateManyInput.schema';

export const WorkAttemptCreateManySchema: z.ZodType<Prisma.WorkAttemptCreateManyArgs> = z.object({ data: z.union([ WorkAttemptCreateManyInputObjectSchema, z.array(WorkAttemptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkAttemptCreateManyArgs>;

export const WorkAttemptCreateManyZodSchema = z.object({ data: z.union([ WorkAttemptCreateManyInputObjectSchema, z.array(WorkAttemptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();