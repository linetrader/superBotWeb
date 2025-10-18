import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { NestedEnumMarketKindNullableWithAggregatesFilterObjectSchema as NestedEnumMarketKindNullableWithAggregatesFilterObjectSchema } from './NestedEnumMarketKindNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumMarketKindNullableFilterObjectSchema as NestedEnumMarketKindNullableFilterObjectSchema } from './NestedEnumMarketKindNullableFilter.schema'

const makeSchema = () => z.object({
  equals: MarketKindSchema.optional().nullable(),
  in: MarketKindSchema.array().optional().nullable(),
  notIn: MarketKindSchema.array().optional().nullable(),
  not: z.union([MarketKindSchema, z.lazy(() => NestedEnumMarketKindNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMarketKindNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMarketKindNullableFilterObjectSchema).optional()
}).strict();
export const EnumMarketKindNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumMarketKindNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMarketKindNullableWithAggregatesFilter>;
export const EnumMarketKindNullableWithAggregatesFilterObjectZodSchema = makeSchema();
