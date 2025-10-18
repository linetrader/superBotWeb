import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumBotModeWithAggregatesFilterObjectSchema as EnumBotModeWithAggregatesFilterObjectSchema } from './EnumBotModeWithAggregatesFilter.schema';
import { BotModeSchema } from '../enums/BotMode.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumMarketKindNullableWithAggregatesFilterObjectSchema as EnumMarketKindNullableWithAggregatesFilterObjectSchema } from './EnumMarketKindNullableWithAggregatesFilter.schema';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tradingbotscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TradingBotScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TradingBotScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TradingBotScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TradingBotScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TradingBotScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(60)]).optional(),
  mode: z.union([z.lazy(() => EnumBotModeWithAggregatesFilterObjectSchema), BotModeSchema]).optional(),
  exchangeMarketId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  singleMarketKind: z.union([z.lazy(() => EnumMarketKindNullableWithAggregatesFilterObjectSchema), MarketKindSchema]).optional().nullable(),
  symbol: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(40)]).optional(),
  strategyConfigId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  enabled: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TradingBotScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TradingBotScalarWhereWithAggregatesInput> = tradingbotscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TradingBotScalarWhereWithAggregatesInput>;
export const TradingBotScalarWhereWithAggregatesInputObjectZodSchema = tradingbotscalarwherewithaggregatesinputSchema;
