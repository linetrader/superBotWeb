import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemCreateManyInputObjectSchema as WorkItemCreateManyInputObjectSchema } from './objects/WorkItemCreateManyInput.schema';

export const WorkItemCreateManySchema: z.ZodType<Prisma.WorkItemCreateManyArgs> = z.object({ data: z.union([ WorkItemCreateManyInputObjectSchema, z.array(WorkItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkItemCreateManyArgs>;

export const WorkItemCreateManyZodSchema = z.object({ data: z.union([ WorkItemCreateManyInputObjectSchema, z.array(WorkItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();