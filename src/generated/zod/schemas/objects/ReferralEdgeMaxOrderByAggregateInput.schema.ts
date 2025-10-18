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
export const ReferralEdgeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReferralEdgeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeMaxOrderByAggregateInput>;
export const ReferralEdgeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
