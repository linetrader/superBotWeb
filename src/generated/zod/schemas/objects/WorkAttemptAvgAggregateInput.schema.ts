import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  exitCode: z.literal(true).optional()
}).strict();
export const WorkAttemptAvgAggregateInputObjectSchema: z.ZodType<Prisma.WorkAttemptAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptAvgAggregateInputType>;
export const WorkAttemptAvgAggregateInputObjectZodSchema = makeSchema();
