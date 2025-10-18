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
  payload: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ApiAuditLogCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ApiAuditLogCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiAuditLogCountOrderByAggregateInput>;
export const ApiAuditLogCountOrderByAggregateInputObjectZodSchema = makeSchema();
