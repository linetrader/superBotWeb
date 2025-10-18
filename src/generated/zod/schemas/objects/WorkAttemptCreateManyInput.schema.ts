import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  workItemId: z.string(),
  startedAt: z.coerce.date().optional(),
  finishedAt: z.coerce.date().optional().nullable(),
  workerTaskArn: z.string().optional().nullable(),
  exitCode: z.number().int().optional().nullable(),
  error: z.string().optional().nullable(),
  logsRef: z.string().optional().nullable()
}).strict();
export const WorkAttemptCreateManyInputObjectSchema: z.ZodType<Prisma.WorkAttemptCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptCreateManyInput>;
export const WorkAttemptCreateManyInputObjectZodSchema = makeSchema();
