import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkItemCountOutputTypeSelectObjectSchema as WorkItemCountOutputTypeSelectObjectSchema } from './WorkItemCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WorkItemCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const WorkItemCountOutputTypeArgsObjectSchema = makeSchema();
export const WorkItemCountOutputTypeArgsObjectZodSchema = makeSchema();
