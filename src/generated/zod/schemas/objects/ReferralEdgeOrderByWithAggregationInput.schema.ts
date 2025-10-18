import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReferralEdgeCountOrderByAggregateInputObjectSchema as ReferralEdgeCountOrderByAggregateInputObjectSchema } from './ReferralEdgeCountOrderByAggregateInput.schema';
import { ReferralEdgeAvgOrderByAggregateInputObjectSchema as ReferralEdgeAvgOrderByAggregateInputObjectSchema } from './ReferralEdgeAvgOrderByAggregateInput.schema';
import { ReferralEdgeMaxOrderByAggregateInputObjectSchema as ReferralEdgeMaxOrderByAggregateInputObjectSchema } from './ReferralEdgeMaxOrderByAggregateInput.schema';
import { ReferralEdgeMinOrderByAggregateInputObjectSchema as ReferralEdgeMinOrderByAggregateInputObjectSchema } from './ReferralEdgeMinOrderByAggregateInput.schema';
import { ReferralEdgeSumOrderByAggregateInputObjectSchema as ReferralEdgeSumOrderByAggregateInputObjectSchema } from './ReferralEdgeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  parentId: SortOrderSchema.optional(),
  childId: SortOrderSchema.optional(),
  position: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  groupNo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ReferralEdgeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ReferralEdgeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReferralEdgeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReferralEdgeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ReferralEdgeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReferralEdgeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReferralEdgeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeOrderByWithAggregationInput>;
export const ReferralEdgeOrderByWithAggregationInputObjectZodSchema = makeSchema();
