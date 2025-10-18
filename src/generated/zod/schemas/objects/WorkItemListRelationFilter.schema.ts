import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemWhereInputObjectSchema as WorkItemWhereInputObjectSchema } from './WorkItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkItemWhereInputObjectSchema).optional()
}).strict();
export const WorkItemListRelationFilterObjectSchema: z.ZodType<Prisma.WorkItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemListRelationFilter>;
export const WorkItemListRelationFilterObjectZodSchema = makeSchema();
