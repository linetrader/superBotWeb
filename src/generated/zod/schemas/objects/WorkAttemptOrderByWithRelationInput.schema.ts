import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkItemOrderByWithRelationInputObjectSchema as WorkItemOrderByWithRelationInputObjectSchema } from './WorkItemOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workItemId: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  finishedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  workerTaskArn: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  exitCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  error: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logsRef: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  workItem: z.lazy(() => WorkItemOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WorkAttemptOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkAttemptOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptOrderByWithRelationInput>;
export const WorkAttemptOrderByWithRelationInputObjectZodSchema = makeSchema();
