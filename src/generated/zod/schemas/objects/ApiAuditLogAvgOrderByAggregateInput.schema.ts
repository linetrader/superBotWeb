import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  status: SortOrderSchema.optional()
}).strict();
export const ApiAuditLogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ApiAuditLogAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiAuditLogAvgOrderByAggregateInput>;
export const ApiAuditLogAvgOrderByAggregateInputObjectZodSchema = makeSchema();
