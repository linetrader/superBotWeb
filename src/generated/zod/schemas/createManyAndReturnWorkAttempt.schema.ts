import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkAttemptSelectObjectSchema as WorkAttemptSelectObjectSchema } from './objects/WorkAttemptSelect.schema';
import { WorkAttemptCreateManyInputObjectSchema as WorkAttemptCreateManyInputObjectSchema } from './objects/WorkAttemptCreateManyInput.schema';

export const WorkAttemptCreateManyAndReturnSchema: z.ZodType<Prisma.WorkAttemptCreateManyAndReturnArgs> = z.object({ select: WorkAttemptSelectObjectSchema.optional(), data: z.union([ WorkAttemptCreateManyInputObjectSchema, z.array(WorkAttemptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkAttemptCreateManyAndReturnArgs>;

export const WorkAttemptCreateManyAndReturnZodSchema = z.object({ select: WorkAttemptSelectObjectSchema.optional(), data: z.union([ WorkAttemptCreateManyInputObjectSchema, z.array(WorkAttemptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();