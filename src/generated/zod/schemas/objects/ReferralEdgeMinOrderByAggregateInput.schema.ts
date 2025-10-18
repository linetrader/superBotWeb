import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  parentId: SortOrderSchema.optional(),
  childId: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  groupNo: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ReferralEdgeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReferralEdgeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeMinOrderByAggregateInput>;
export const ReferralEdgeMinOrderByAggregateInputObjectZodSchema = makeSchema();
