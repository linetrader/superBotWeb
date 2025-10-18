import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  workItemId: z.literal(true).optional(),
  startedAt: z.literal(true).optional(),
  finishedAt: z.literal(true).optional(),
  workerTaskArn: z.literal(true).optional(),
  exitCode: z.literal(true).optional(),
  error: z.literal(true).optional(),
  logsRef: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WorkAttemptCountAggregateInputObjectSchema: z.ZodType<Prisma.WorkAttemptCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptCountAggregateInputType>;
export const WorkAttemptCountAggregateInputObjectZodSchema = makeSchema();
