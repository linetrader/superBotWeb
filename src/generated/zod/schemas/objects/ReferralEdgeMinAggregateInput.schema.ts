import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  parentId: z.literal(true).optional(),
  childId: z.literal(true).optional(),
  position: z.literal(true).optional(),
  groupNo: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ReferralEdgeMinAggregateInputObjectSchema: z.ZodType<Prisma.ReferralEdgeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeMinAggregateInputType>;
export const ReferralEdgeMinAggregateInputObjectZodSchema = makeSchema();
