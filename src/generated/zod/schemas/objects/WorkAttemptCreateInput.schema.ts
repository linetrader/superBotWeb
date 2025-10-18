import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemCreateNestedOneWithoutRunsInputObjectSchema as WorkItemCreateNestedOneWithoutRunsInputObjectSchema } from './WorkItemCreateNestedOneWithoutRunsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  startedAt: z.coerce.date().optional(),
  finishedAt: z.coerce.date().optional().nullable(),
  workerTaskArn: z.string().optional().nullable(),
  exitCode: z.number().int().optional().nullable(),
  error: z.string().optional().nullable(),
  logsRef: z.string().optional().nullable(),
  workItem: z.lazy(() => WorkItemCreateNestedOneWithoutRunsInputObjectSchema)
}).strict();
export const WorkAttemptCreateInputObjectSchema: z.ZodType<Prisma.WorkAttemptCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptCreateInput>;
export const WorkAttemptCreateInputObjectZodSchema = makeSchema();
