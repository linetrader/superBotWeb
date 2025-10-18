import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  attempts: z.literal(true).optional()
}).strict();
export const WorkItemSumAggregateInputObjectSchema: z.ZodType<Prisma.WorkItemSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemSumAggregateInputType>;
export const WorkItemSumAggregateInputObjectZodSchema = makeSchema();
