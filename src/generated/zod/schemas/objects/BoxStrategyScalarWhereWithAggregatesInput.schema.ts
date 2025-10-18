import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const boxstrategyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BoxStrategyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BoxStrategyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BoxStrategyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BoxStrategyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BoxStrategyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  strategyConfigId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  lowerTh: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  upperTh: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  boxTouchPct: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BoxStrategyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BoxStrategyScalarWhereWithAggregatesInput> = boxstrategyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BoxStrategyScalarWhereWithAggregatesInput>;
export const BoxStrategyScalarWhereWithAggregatesInputObjectZodSchema = boxstrategyscalarwherewithaggregatesinputSchema;
