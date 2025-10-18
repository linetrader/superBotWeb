import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumStrategyKindFilterObjectSchema as EnumStrategyKindFilterObjectSchema } from './EnumStrategyKindFilter.schema';
import { StrategyKindSchema } from '../enums/StrategyKind.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumTimeframeFilterObjectSchema as EnumTimeframeFilterObjectSchema } from './EnumTimeframeFilter.schema';
import { TimeframeSchema } from '../enums/Timeframe.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TrendStrategyNullableScalarRelationFilterObjectSchema as TrendStrategyNullableScalarRelationFilterObjectSchema } from './TrendStrategyNullableScalarRelationFilter.schema';
import { TrendStrategyWhereInputObjectSchema as TrendStrategyWhereInputObjectSchema } from './TrendStrategyWhereInput.schema';
import { BoxStrategyNullableScalarRelationFilterObjectSchema as BoxStrategyNullableScalarRelationFilterObjectSchema } from './BoxStrategyNullableScalarRelationFilter.schema';
import { BoxStrategyWhereInputObjectSchema as BoxStrategyWhereInputObjectSchema } from './BoxStrategyWhereInput.schema';
import { TradingBotListRelationFilterObjectSchema as TradingBotListRelationFilterObjectSchema } from './TradingBotListRelationFilter.schema'

const strategyconfigwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StrategyConfigWhereInputObjectSchema), z.lazy(() => StrategyConfigWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StrategyConfigWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StrategyConfigWhereInputObjectSchema), z.lazy(() => StrategyConfigWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  kind: z.union([z.lazy(() => EnumStrategyKindFilterObjectSchema), StrategyKindSchema]).optional(),
  useMartin: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  martinMultiplier: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  defaultSize: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxSize: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  targetProfit: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  leverage: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  timeframe: z.union([z.lazy(() => EnumTimeframeFilterObjectSchema), TimeframeSchema]).optional(),
  enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  rsiLength: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  trend: z.union([z.lazy(() => TrendStrategyNullableScalarRelationFilterObjectSchema), z.lazy(() => TrendStrategyWhereInputObjectSchema)]).optional(),
  box: z.union([z.lazy(() => BoxStrategyNullableScalarRelationFilterObjectSchema), z.lazy(() => BoxStrategyWhereInputObjectSchema)]).optional(),
  tradingBots: z.lazy(() => TradingBotListRelationFilterObjectSchema).optional()
}).strict();
export const StrategyConfigWhereInputObjectSchema: z.ZodType<Prisma.StrategyConfigWhereInput> = strategyconfigwhereinputSchema as unknown as z.ZodType<Prisma.StrategyConfigWhereInput>;
export const StrategyConfigWhereInputObjectZodSchema = strategyconfigwhereinputSchema;
