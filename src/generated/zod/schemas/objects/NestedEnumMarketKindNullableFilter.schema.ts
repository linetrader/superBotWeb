import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { MarketKindSchema } from '../enums/MarketKind.schema'

const nestedenummarketkindnullablefilterSchema = z.object({
  equals: MarketKindSchema.optional().nullable(),
  in: MarketKindSchema.array().optional().nullable(),
  notIn: MarketKindSchema.array().optional().nullable(),
  not: z.union([MarketKindSchema, z.lazy(() => NestedEnumMarketKindNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumMarketKindNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumMarketKindNullableFilter> = nestedenummarketkindnullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumMarketKindNullableFilter>;
export const NestedEnumMarketKindNullableFilterObjectZodSchema = nestedenummarketkindnullablefilterSchema;
