import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  status: SortOrderSchema.optional()
}).strict();
export const ApiAuditLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ApiAuditLogSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiAuditLogSumOrderByAggregateInput>;
export const ApiAuditLogSumOrderByAggregateInputObjectZodSchema = makeSchema();
