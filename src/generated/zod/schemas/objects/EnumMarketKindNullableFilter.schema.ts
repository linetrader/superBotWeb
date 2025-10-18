import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { NestedEnumMarketKindNullableFilterObjectSchema as NestedEnumMarketKindNullableFilterObjectSchema } from './NestedEnumMarketKindNullableFilter.schema'

const makeSchema = () => z.object({
  equals: MarketKindSchema.optional().nullable(),
  in: MarketKindSchema.array().optional().nullable(),
  notIn: MarketKindSchema.array().optional().nullable(),
  not: z.union([MarketKindSchema, z.lazy(() => NestedEnumMarketKindNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumMarketKindNullableFilterObjectSchema: z.ZodType<Prisma.EnumMarketKindNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMarketKindNullableFilter>;
export const EnumMarketKindNullableFilterObjectZodSchema = makeSchema();
