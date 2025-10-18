import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  ip: SortOrderSchema.optional(),
  ua: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ApiAuditLogMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ApiAuditLogMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiAuditLogMaxOrderByAggregateInput>;
export const ApiAuditLogMaxOrderByAggregateInputObjectZodSchema = makeSchema();
