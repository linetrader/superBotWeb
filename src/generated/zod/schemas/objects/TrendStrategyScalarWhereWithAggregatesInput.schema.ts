import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const trendstrategyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TrendStrategyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TrendStrategyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TrendStrategyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TrendStrategyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TrendStrategyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  strategyConfigId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  trendRsiUpperPullback: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  trendRsiLowerPullback: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TrendStrategyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TrendStrategyScalarWhereWithAggregatesInput> = trendstrategyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TrendStrategyScalarWhereWithAggregatesInput>;
export const TrendStrategyScalarWhereWithAggregatesInputObjectZodSchema = trendstrategyscalarwherewithaggregatesinputSchema;
