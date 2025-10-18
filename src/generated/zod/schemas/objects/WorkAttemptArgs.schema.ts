import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkAttemptSelectObjectSchema as WorkAttemptSelectObjectSchema } from './WorkAttemptSelect.schema';
import { WorkAttemptIncludeObjectSchema as WorkAttemptIncludeObjectSchema } from './WorkAttemptInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WorkAttemptSelectObjectSchema).optional(),
  include: z.lazy(() => WorkAttemptIncludeObjectSchema).optional()
}).strict();
export const WorkAttemptArgsObjectSchema = makeSchema();
export const WorkAttemptArgsObjectZodSchema = makeSchema();
