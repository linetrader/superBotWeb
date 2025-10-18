import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { NotifyStatusSchema } from '../enums/NotifyStatus.schema';
import { NestedEnumNotifyStatusFilterObjectSchema as NestedEnumNotifyStatusFilterObjectSchema } from './NestedEnumNotifyStatusFilter.schema'

const makeSchema = () => z.object({
  equals: NotifyStatusSchema.optional(),
  in: NotifyStatusSchema.array().optional(),
  notIn: NotifyStatusSchema.array().optional(),
  not: z.union([NotifyStatusSchema, z.lazy(() => NestedEnumNotifyStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumNotifyStatusFilterObjectSchema: z.ZodType<Prisma.EnumNotifyStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumNotifyStatusFilter>;
export const EnumNotifyStatusFilterObjectZodSchema = makeSchema();
