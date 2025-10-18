import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TimeframeSchema } from '../enums/Timeframe.schema';
import { NestedEnumTimeframeFilterObjectSchema as NestedEnumTimeframeFilterObjectSchema } from './NestedEnumTimeframeFilter.schema'

const makeSchema = () => z.object({
  equals: TimeframeSchema.optional(),
  in: TimeframeSchema.array().optional(),
  notIn: TimeframeSchema.array().optional(),
  not: z.union([TimeframeSchema, z.lazy(() => NestedEnumTimeframeFilterObjectSchema)]).optional()
}).strict();
export const EnumTimeframeFilterObjectSchema: z.ZodType<Prisma.EnumTimeframeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTimeframeFilter>;
export const EnumTimeframeFilterObjectZodSchema = makeSchema();
