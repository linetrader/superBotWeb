import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { WorkItemSelectObjectSchema as WorkItemSelectObjectSchema } from './objects/WorkItemSelect.schema';
import { WorkItemCreateManyInputObjectSchema as WorkItemCreateManyInputObjectSchema } from './objects/WorkItemCreateManyInput.schema';

export const WorkItemCreateManyAndReturnSchema: z.ZodType<Prisma.WorkItemCreateManyAndReturnArgs> = z.object({ select: WorkItemSelectObjectSchema.optional(), data: z.union([ WorkItemCreateManyInputObjectSchema, z.array(WorkItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkItemCreateManyAndReturnArgs>;

export const WorkItemCreateManyAndReturnZodSchema = z.object({ select: WorkItemSelectObjectSchema.optional(), data: z.union([ WorkItemCreateManyInputObjectSchema, z.array(WorkItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();