import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemWhereInputObjectSchema as WorkItemWhereInputObjectSchema } from './WorkItemWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => WorkItemWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => WorkItemWhereInputObjectSchema).optional()
}).strict();
export const WorkItemScalarRelationFilterObjectSchema: z.ZodType<Prisma.WorkItemScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemScalarRelationFilter>;
export const WorkItemScalarRelationFilterObjectZodSchema = makeSchema();
