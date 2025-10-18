import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ExchangeScalarRelationFilterObjectSchema as ExchangeScalarRelationFilterObjectSchema } from './ExchangeScalarRelationFilter.schema';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './ExchangeWhereInput.schema';
import { TradingBotListRelationFilterObjectSchema as TradingBotListRelationFilterObjectSchema } from './TradingBotListRelationFilter.schema';
import { BotGroupExchangeListRelationFilterObjectSchema as BotGroupExchangeListRelationFilterObjectSchema } from './BotGroupExchangeListRelationFilter.schema'

const exchangemarketwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ExchangeMarketWhereInputObjectSchema), z.lazy(() => ExchangeMarketWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExchangeMarketWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExchangeMarketWhereInputObjectSchema), z.lazy(() => ExchangeMarketWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  exchangeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(16)]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  restBaseUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  wsBaseUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  active: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  exchange: z.union([z.lazy(() => ExchangeScalarRelationFilterObjectSchema), z.lazy(() => ExchangeWhereInputObjectSchema)]).optional(),
  bots: z.lazy(() => TradingBotListRelationFilterObjectSchema).optional(),
  groupExchanges: z.lazy(() => BotGroupExchangeListRelationFilterObjectSchema).optional()
}).strict();
export const ExchangeMarketWhereInputObjectSchema: z.ZodType<Prisma.ExchangeMarketWhereInput> = exchangemarketwhereinputSchema as unknown as z.ZodType<Prisma.ExchangeMarketWhereInput>;
export const ExchangeMarketWhereInputObjectZodSchema = exchangemarketwhereinputSchema;
