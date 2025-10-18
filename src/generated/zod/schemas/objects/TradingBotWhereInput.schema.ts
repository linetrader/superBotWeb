import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumBotModeFilterObjectSchema as EnumBotModeFilterObjectSchema } from './EnumBotModeFilter.schema';
import { BotModeSchema } from '../enums/BotMode.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumMarketKindNullableFilterObjectSchema as EnumMarketKindNullableFilterObjectSchema } from './EnumMarketKindNullableFilter.schema';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ExchangeMarketNullableScalarRelationFilterObjectSchema as ExchangeMarketNullableScalarRelationFilterObjectSchema } from './ExchangeMarketNullableScalarRelationFilter.schema';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './ExchangeMarketWhereInput.schema';
import { StrategyConfigScalarRelationFilterObjectSchema as StrategyConfigScalarRelationFilterObjectSchema } from './StrategyConfigScalarRelationFilter.schema';
import { StrategyConfigWhereInputObjectSchema as StrategyConfigWhereInputObjectSchema } from './StrategyConfigWhereInput.schema';
import { BotLogListRelationFilterObjectSchema as BotLogListRelationFilterObjectSchema } from './BotLogListRelationFilter.schema';
import { BotRuntimeNullableScalarRelationFilterObjectSchema as BotRuntimeNullableScalarRelationFilterObjectSchema } from './BotRuntimeNullableScalarRelationFilter.schema';
import { BotRuntimeWhereInputObjectSchema as BotRuntimeWhereInputObjectSchema } from './BotRuntimeWhereInput.schema';
import { WorkItemListRelationFilterObjectSchema as WorkItemListRelationFilterObjectSchema } from './WorkItemListRelationFilter.schema';
import { BotGroupListRelationFilterObjectSchema as BotGroupListRelationFilterObjectSchema } from './BotGroupListRelationFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const tradingbotwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TradingBotWhereInputObjectSchema), z.lazy(() => TradingBotWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TradingBotWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TradingBotWhereInputObjectSchema), z.lazy(() => TradingBotWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(60)]).optional(),
  mode: z.union([z.lazy(() => EnumBotModeFilterObjectSchema), BotModeSchema]).optional(),
  exchangeMarketId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  singleMarketKind: z.union([z.lazy(() => EnumMarketKindNullableFilterObjectSchema), MarketKindSchema]).optional().nullable(),
  symbol: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(40)]).optional(),
  strategyConfigId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  exchangeMarket: z.union([z.lazy(() => ExchangeMarketNullableScalarRelationFilterObjectSchema), z.lazy(() => ExchangeMarketWhereInputObjectSchema)]).optional(),
  strategyConfig: z.union([z.lazy(() => StrategyConfigScalarRelationFilterObjectSchema), z.lazy(() => StrategyConfigWhereInputObjectSchema)]).optional(),
  BotLog: z.lazy(() => BotLogListRelationFilterObjectSchema).optional(),
  BotRuntime: z.union([z.lazy(() => BotRuntimeNullableScalarRelationFilterObjectSchema), z.lazy(() => BotRuntimeWhereInputObjectSchema)]).optional(),
  workItems: z.lazy(() => WorkItemListRelationFilterObjectSchema).optional(),
  groups: z.lazy(() => BotGroupListRelationFilterObjectSchema).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const TradingBotWhereInputObjectSchema: z.ZodType<Prisma.TradingBotWhereInput> = tradingbotwhereinputSchema as unknown as z.ZodType<Prisma.TradingBotWhereInput>;
export const TradingBotWhereInputObjectZodSchema = tradingbotwhereinputSchema;
