import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemArgsObjectSchema as WorkItemArgsObjectSchema } from './WorkItemArgs.schema'

const makeSchema = () => z.object({
  workItem: z.union([z.boolean(), z.lazy(() => WorkItemArgsObjectSchema)]).optional()
}).strict();
export const WorkAttemptIncludeObjectSchema: z.ZodType<Prisma.WorkAttemptInclude> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptInclude>;
export const WorkAttemptIncludeObjectZodSchema = makeSchema();
