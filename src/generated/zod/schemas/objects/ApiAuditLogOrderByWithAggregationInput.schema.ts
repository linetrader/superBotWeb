import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ApiAuditLogCountOrderByAggregateInputObjectSchema as ApiAuditLogCountOrderByAggregateInputObjectSchema } from './ApiAuditLogCountOrderByAggregateInput.schema';
import { ApiAuditLogAvgOrderByAggregateInputObjectSchema as ApiAuditLogAvgOrderByAggregateInputObjectSchema } from './ApiAuditLogAvgOrderByAggregateInput.schema';
import { ApiAuditLogMaxOrderByAggregateInputObjectSchema as ApiAuditLogMaxOrderByAggregateInputObjectSchema } from './ApiAuditLogMaxOrderByAggregateInput.schema';
import { ApiAuditLogMinOrderByAggregateInputObjectSchema as ApiAuditLogMinOrderByAggregateInputObjectSchema } from './ApiAuditLogMinOrderByAggregateInput.schema';
import { ApiAuditLogSumOrderByAggregateInputObjectSchema as ApiAuditLogSumOrderByAggregateInputObjectSchema } from './ApiAuditLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  path: SortOrderSchema.optional(),
  method: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  ip: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ua: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  payload: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ApiAuditLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ApiAuditLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ApiAuditLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ApiAuditLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ApiAuditLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ApiAuditLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ApiAuditLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiAuditLogOrderByWithAggregationInput>;
export const ApiAuditLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
