import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  position: SortOrderSchema.optional(),
  groupNo: SortOrderSchema.optional()
}).strict();
export const ReferralEdgeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReferralEdgeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeAvgOrderByAggregateInput>;
export const ReferralEdgeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
