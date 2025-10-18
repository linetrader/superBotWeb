import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  attempts: SortOrderSchema.optional()
}).strict();
export const WorkItemAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkItemAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemAvgOrderByAggregateInput>;
export const WorkItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
