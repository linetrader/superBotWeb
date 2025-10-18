import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  position: z.literal(true).optional(),
  groupNo: z.literal(true).optional()
}).strict();
export const ReferralEdgeAvgAggregateInputObjectSchema: z.ZodType<Prisma.ReferralEdgeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeAvgAggregateInputType>;
export const ReferralEdgeAvgAggregateInputObjectZodSchema = makeSchema();
