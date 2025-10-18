import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemSelectObjectSchema as WorkItemSelectObjectSchema } from './WorkItemSelect.schema';
import { WorkItemIncludeObjectSchema as WorkItemIncludeObjectSchema } from './WorkItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WorkItemSelectObjectSchema).optional(),
  include: z.lazy(() => WorkItemIncludeObjectSchema).optional()
}).strict();
export const WorkItemArgsObjectSchema = makeSchema();
export const WorkItemArgsObjectZodSchema = makeSchema();
