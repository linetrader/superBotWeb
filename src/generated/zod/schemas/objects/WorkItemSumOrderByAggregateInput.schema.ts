import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  attempts: SortOrderSchema.optional()
}).strict();
export const WorkItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemSumOrderByAggregateInput>;
export const WorkItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
