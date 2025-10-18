import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StrategyConfigScalarRelationFilterObjectSchema as StrategyConfigScalarRelationFilterObjectSchema } from './StrategyConfigScalarRelationFilter.schema';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema'

const boxstrategywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BoxStrategyWhereInputObjectSchema), z.lazy(() => BoxStrategyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BoxStrategyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BoxStrategyWhereInputObjectSchema), z.lazy(() => BoxStrategyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  strategyConfigId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lowerTh: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  upperTh: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  boxTouchPct: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  strategyConfig: z.union([z.lazy(() => StrategyConfigScalarRelationFilterObjectSchema), z.lazy(() => StrategyConfigWhereInputObjectSchema)]).optional()
}).strict();
export const BoxStrategyWhereInputObjectSchema: z.ZodType<Prisma.BoxStrategyWhereInput> = boxstrategywhereinputSchema as unknown as z.ZodType<Prisma.BoxStrategyWhereInput>;
export const BoxStrategyWhereInputObjectZodSchema = boxstrategywhereinputSchema;
