import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  position: z.literal(true).optional(),
  groupNo: z.literal(true).optional()
}).strict();
export const ReferralEdgeSumAggregateInputObjectSchema: z.ZodType<Prisma.ReferralEdgeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeSumAggregateInputType>;
export const ReferralEdgeSumAggregateInputObjectZodSchema = makeSchema();
