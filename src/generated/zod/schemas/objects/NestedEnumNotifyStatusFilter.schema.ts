import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { NotifyStatusSchema } from '../enums/NotifyStatus.schema'

const nestedenumnotifystatusfilterSchema = z.object({
  equals: NotifyStatusSchema.optional(),
  in: NotifyStatusSchema.array().optional(),
  notIn: NotifyStatusSchema.array().optional(),
  not: z.union([NotifyStatusSchema, z.lazy(() => NestedEnumNotifyStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumNotifyStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumNotifyStatusFilter> = nestedenumnotifystatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumNotifyStatusFilter>;
export const NestedEnumNotifyStatusFilterObjectZodSchema = nestedenumnotifystatusfilterSchema;
