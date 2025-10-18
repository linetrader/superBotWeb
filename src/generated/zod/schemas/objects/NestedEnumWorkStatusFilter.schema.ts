import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { WorkStatusSchema } from '../enums/WorkStatus.schema'

const nestedenumworkstatusfilterSchema = z.object({
  equals: WorkStatusSchema.optional(),
  in: WorkStatusSchema.array().optional(),
  notIn: WorkStatusSchema.array().optional(),
  not: z.union([WorkStatusSchema, z.lazy(() => NestedEnumWorkStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumWorkStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumWorkStatusFilter> = nestedenumworkstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumWorkStatusFilter>;
export const NestedEnumWorkStatusFilterObjectZodSchema = nestedenumworkstatusfilterSchema;
