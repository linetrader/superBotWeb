import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemArgsObjectSchema as WorkItemArgsObjectSchema } from './WorkItemArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  workItemId: z.boolean().optional(),
  workItem: z.union([z.boolean(), z.lazy(() => WorkItemArgsObjectSchema)]).optional(),
  startedAt: z.boolean().optional(),
  finishedAt: z.boolean().optional(),
  workerTaskArn: z.boolean().optional(),
  exitCode: z.boolean().optional(),
  error: z.boolean().optional(),
  logsRef: z.boolean().optional()
}).strict();
export const WorkAttemptSelectObjectSchema: z.ZodType<Prisma.WorkAttemptSelect> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptSelect>;
export const WorkAttemptSelectObjectZodSchema = makeSchema();
