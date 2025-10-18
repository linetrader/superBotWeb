import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumBotModeFilterObjectSchema as EnumBotModeFilterObjectSchema } from './EnumBotModeFilter.schema';
import { BotModeSchema } from '../enums/BotMode.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumMarketKindNullableFilterObjectSchema as EnumMarketKindNullableFilterObjectSchema } from './EnumMarketKindNullableFilter.schema';
import { MarketKindSchema } from '../enums/MarketKind.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const tradingbotscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TradingBotScalarWhereInputObjectSchema), z.lazy(() => TradingBotScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TradingBotScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TradingBotScalarWhereInputObjectSchema), z.lazy(() => TradingBotScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mode: z.union([z.lazy(() => EnumBotModeFilterObjectSchema), BotModeSchema]).optional(),
  exchangeMarketId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  singleMarketKind: z.union([z.lazy(() => EnumMarketKindNullableFilterObjectSchema), MarketKindSchema]).optional().nullable(),
  symbol: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  strategyConfigId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const TradingBotScalarWhereInputObjectSchema: z.ZodType<Prisma.TradingBotScalarWhereInput> = tradingbotscalarwhereinputSchema as unknown as z.ZodType<Prisma.TradingBotScalarWhereInput>;
export const TradingBotScalarWhereInputObjectZodSchema = tradingbotscalarwhereinputSchema;
