import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StrategyKindSchema } from '../enums/StrategyKind.schema';
import { NestedEnumStrategyKindFilterObjectSchema as NestedEnumStrategyKindFilterObjectSchema } from './NestedEnumStrategyKindFilter.schema'

const makeSchema = () => z.object({
  equals: StrategyKindSchema.optional(),
  in: StrategyKindSchema.array().optional(),
  notIn: StrategyKindSchema.array().optional(),
  not: z.union([StrategyKindSchema, z.lazy(() => NestedEnumStrategyKindFilterObjectSchema)]).optional()
}).strict();
export const EnumStrategyKindFilterObjectSchema: z.ZodType<Prisma.EnumStrategyKindFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStrategyKindFilter>;
export const EnumStrategyKindFilterObjectZodSchema = makeSchema();
