import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumStrategyKindWithAggregatesFilterObjectSchema as EnumStrategyKindWithAggregatesFilterObjectSchema } from './EnumStrategyKindWithAggregatesFilter.schema';
import { StrategyKindSchema } from '../enums/StrategyKind.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumTimeframeWithAggregatesFilterObjectSchema as EnumTimeframeWithAggregatesFilterObjectSchema } from './EnumTimeframeWithAggregatesFilter.schema';
import { TimeframeSchema } from '../enums/Timeframe.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const strategyconfigscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StrategyConfigScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StrategyConfigScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StrategyConfigScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StrategyConfigScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StrategyConfigScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => EnumStrategyKindWithAggregatesFilterObjectSchema), StrategyKindSchema]).optional(),
  useMartin: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  martinMultiplier: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  defaultSize: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  maxSize: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  targetProfit: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  leverage: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  timeframe: z.union([z.lazy(() => EnumTimeframeWithAggregatesFilterObjectSchema), TimeframeSchema]).optional(),
  enabled: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  rsiLength: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StrategyConfigScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StrategyConfigScalarWhereWithAggregatesInput> = strategyconfigscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StrategyConfigScalarWhereWithAggregatesInput>;
export const StrategyConfigScalarWhereWithAggregatesInputObjectZodSchema = strategyconfigscalarwherewithaggregatesinputSchema;
