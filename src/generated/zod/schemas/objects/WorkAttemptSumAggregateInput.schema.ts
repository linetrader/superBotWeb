import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  exitCode: z.literal(true).optional()
}).strict();
export const WorkAttemptSumAggregateInputObjectSchema: z.ZodType<Prisma.WorkAttemptSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptSumAggregateInputType>;
export const WorkAttemptSumAggregateInputObjectZodSchema = makeSchema();
