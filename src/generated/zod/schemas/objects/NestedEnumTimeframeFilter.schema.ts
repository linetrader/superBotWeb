import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TimeframeSchema } from '../enums/Timeframe.schema'

const nestedenumtimeframefilterSchema = z.object({
  equals: TimeframeSchema.optional(),
  in: TimeframeSchema.array().optional(),
  notIn: TimeframeSchema.array().optional(),
  not: z.union([TimeframeSchema, z.lazy(() => NestedEnumTimeframeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTimeframeFilterObjectSchema: z.ZodType<Prisma.NestedEnumTimeframeFilter> = nestedenumtimeframefilterSchema as unknown as z.ZodType<Prisma.NestedEnumTimeframeFilter>;
export const NestedEnumTimeframeFilterObjectZodSchema = nestedenumtimeframefilterSchema;
