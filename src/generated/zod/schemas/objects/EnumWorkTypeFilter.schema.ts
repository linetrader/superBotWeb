import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkTypeSchema } from '../enums/WorkType.schema';
import { NestedEnumWorkTypeFilterObjectSchema as NestedEnumWorkTypeFilterObjectSchema } from './NestedEnumWorkTypeFilter.schema'

const makeSchema = () => z.object({
  equals: WorkTypeSchema.optional(),
  in: WorkTypeSchema.array().optional(),
  notIn: WorkTypeSchema.array().optional(),
  not: z.union([WorkTypeSchema, z.lazy(() => NestedEnumWorkTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumWorkTypeFilterObjectSchema: z.ZodType<Prisma.EnumWorkTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumWorkTypeFilter>;
export const EnumWorkTypeFilterObjectZodSchema = makeSchema();
