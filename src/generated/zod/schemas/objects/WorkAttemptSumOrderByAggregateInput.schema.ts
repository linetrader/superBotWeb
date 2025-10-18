import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  exitCode: SortOrderSchema.optional()
}).strict();
export const WorkAttemptSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkAttemptSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptSumOrderByAggregateInput>;
export const WorkAttemptSumOrderByAggregateInputObjectZodSchema = makeSchema();
