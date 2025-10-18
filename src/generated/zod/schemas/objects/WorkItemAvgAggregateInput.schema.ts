import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  attempts: z.literal(true).optional()
}).strict();
export const WorkItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.WorkItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemAvgAggregateInputType>;
export const WorkItemAvgAggregateInputObjectZodSchema = makeSchema();
