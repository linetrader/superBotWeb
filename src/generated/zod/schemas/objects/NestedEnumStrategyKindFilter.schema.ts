import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyKindSchema } from '../enums/StrategyKind.schema'

const nestedenumstrategykindfilterSchema = z.object({
  equals: StrategyKindSchema.optional(),
  in: StrategyKindSchema.array().optional(),
  notIn: StrategyKindSchema.array().optional(),
  not: z.union([StrategyKindSchema, z.lazy(() => NestedEnumStrategyKindFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumStrategyKindFilterObjectSchema: z.ZodType<Prisma.NestedEnumStrategyKindFilter> = nestedenumstrategykindfilterSchema as unknown as z.ZodType<Prisma.NestedEnumStrategyKindFilter>;
export const NestedEnumStrategyKindFilterObjectZodSchema = nestedenumstrategykindfilterSchema;
