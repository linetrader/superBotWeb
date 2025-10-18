import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  position: SortOrderSchema.optional(),
  groupNo: SortOrderSchema.optional()
}).strict();
export const ReferralEdgeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReferralEdgeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeSumOrderByAggregateInput>;
export const ReferralEdgeSumOrderByAggregateInputObjectZodSchema = makeSchema();
