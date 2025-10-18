import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkTypeSchema } from '../enums/WorkType.schema'

const nestedenumworktypefilterSchema = z.object({
  equals: WorkTypeSchema.optional(),
  in: WorkTypeSchema.array().optional(),
  notIn: WorkTypeSchema.array().optional(),
  not: z.union([WorkTypeSchema, z.lazy(() => NestedEnumWorkTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumWorkTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumWorkTypeFilter> = nestedenumworktypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumWorkTypeFilter>;
export const NestedEnumWorkTypeFilterObjectZodSchema = nestedenumworktypefilterSchema;
