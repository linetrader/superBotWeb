import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  runs: z.boolean().optional()
}).strict();
export const WorkItemCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.WorkItemCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemCountOutputTypeSelect>;
export const WorkItemCountOutputTypeSelectObjectZodSchema = makeSchema();
