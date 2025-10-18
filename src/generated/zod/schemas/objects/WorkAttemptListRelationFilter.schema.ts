import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkAttemptWhereInputObjectSchema as WorkAttemptWhereInputObjectSchema } from './WorkAttemptWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WorkAttemptWhereInputObjectSchema).optional(),
  some: z.lazy(() => WorkAttemptWhereInputObjectSchema).optional(),
  none: z.lazy(() => WorkAttemptWhereInputObjectSchema).optional()
}).strict();
export const WorkAttemptListRelationFilterObjectSchema: z.ZodType<Prisma.WorkAttemptListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WorkAttemptListRelationFilter>;
export const WorkAttemptListRelationFilterObjectZodSchema = makeSchema();
