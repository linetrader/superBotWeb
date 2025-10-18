import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  workItemId: SortOrderSchema.optional(),
  startedAt: SortOrderSchema.optional(),
  finishedAt: SortOrderSchema.optional(),
  workerTaskArn: SortOrderSchema.optional(),
  exitCode: SortOrderSchema.optional(),
  error: SortOrderSchema.optional(),
  logsRef: SortOrderSchema.optional()
}).strict();
export const WorkAttemptMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkAttemptMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptMaxOrderByAggregateInput>;
export const WorkAttemptMaxOrderByAggregateInputObjectZodSchema = makeSchema();
