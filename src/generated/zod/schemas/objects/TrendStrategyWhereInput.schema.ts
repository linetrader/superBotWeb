import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StrategyConfigScalarRelationFilterObjectSchema as StrategyConfigScalarRelationFilterObjectSchema } from './StrategyConfigScalarRelationFilter.schema';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema'

const trendstrategywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TrendStrategyWhereInputObjectSchema), z.lazy(() => TrendStrategyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TrendStrategyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TrendStrategyWhereInputObjectSchema), z.lazy(() => TrendStrategyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  strategyConfigId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  trendRsiUpperPullback: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  trendRsiLowerPullback: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  strategyConfig: z.union([z.lazy(() => StrategyConfigScalarRelationFilterObjectSchema), z.lazy(() => StrategyConfigWhereInputObjectSchema)]).optional()
}).strict();
export const TrendStrategyWhereInputObjectSchema: z.ZodType<Prisma.TrendStrategyWhereInput> = trendstrategywhereinputSchema as unknown as z.ZodType<Prisma.TrendStrategyWhereInput>;
export const TrendStrategyWhereInputObjectZodSchema = trendstrategywhereinputSchema;
