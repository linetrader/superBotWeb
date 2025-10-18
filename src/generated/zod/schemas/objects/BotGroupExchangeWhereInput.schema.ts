import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BotGroupScalarRelationFilterObjectSchema as BotGroupScalarRelationFilterObjectSchema } from './BotGroupScalarRelationFilter.schema';
import { BotGroupWhereInputObjectSchema as BotGroupWhereInputObjectSchema } from './BotGroupWhereInput.schema';
import { ExchangeMarketScalarRelationFilterObjectSchema as ExchangeMarketScalarRelationFilterObjectSchema } from './ExchangeMarketScalarRelationFilter.schema';
import { ExchangeMarketWhereInputObjectSchema as ExchangeMarketWhereInputObjectSchema } from './ExchangeMarketWhereInput.schema'

const botgroupexchangewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BotGroupExchangeWhereInputObjectSchema), z.lazy(() => BotGroupExchangeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotGroupExchangeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotGroupExchangeWhereInputObjectSchema), z.lazy(() => BotGroupExchangeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  groupId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  exchangeMarketId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  allocationBps: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  group: z.union([z.lazy(() => BotGroupScalarRelationFilterObjectSchema), z.lazy(() => BotGroupWhereInputObjectSchema)]).optional(),
  exchangeMarket: z.union([z.lazy(() => ExchangeMarketScalarRelationFilterObjectSchema), z.lazy(() => ExchangeMarketWhereInputObjectSchema)]).optional()
}).strict();
export const BotGroupExchangeWhereInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeWhereInput> = botgroupexchangewhereinputSchema as unknown as z.ZodType<Prisma.BotGroupExchangeWhereInput>;
export const BotGroupExchangeWhereInputObjectZodSchema = botgroupexchangewhereinputSchema;
