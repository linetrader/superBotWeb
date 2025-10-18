import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkStatusSchema } from '../enums/WorkStatus.schema';
import { NestedEnumWorkStatusFilterObjectSchema as NestedEnumWorkStatusFilterObjectSchema } from './NestedEnumWorkStatusFilter.schema'

const makeSchema = () => z.object({
  equals: WorkStatusSchema.optional(),
  in: WorkStatusSchema.array().optional(),
  notIn: WorkStatusSchema.array().optional(),
  not: z.union([WorkStatusSchema, z.lazy(() => NestedEnumWorkStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumWorkStatusFilterObjectSchema: z.ZodType<Prisma.EnumWorkStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumWorkStatusFilter>;
export const EnumWorkStatusFilterObjectZodSchema = makeSchema();
