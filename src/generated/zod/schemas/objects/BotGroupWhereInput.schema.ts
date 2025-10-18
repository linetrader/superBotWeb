import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumGroupKeyFilterObjectSchema as EnumGroupKeyFilterObjectSchema } from './EnumGroupKeyFilter.schema';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TradingBotScalarRelationFilterObjectSchema as TradingBotScalarRelationFilterObjectSchema } from './TradingBotScalarRelationFilter.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema';
import { BotGroupExchangeListRelationFilterObjectSchema as BotGroupExchangeListRelationFilterObjectSchema } from './BotGroupExchangeListRelationFilter.schema'

const botgroupwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BotGroupWhereInputObjectSchema), z.lazy(() => BotGroupWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotGroupWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotGroupWhereInputObjectSchema), z.lazy(() => BotGroupWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  botId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => EnumGroupKeyFilterObjectSchema), GroupKeySchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bot: z.union([z.lazy(() => TradingBotScalarRelationFilterObjectSchema), z.lazy(() => TradingBotWhereInputObjectSchema)]).optional(),
  exchanges: z.lazy(() => BotGroupExchangeListRelationFilterObjectSchema).optional()
}).strict();
export const BotGroupWhereInputObjectSchema: z.ZodType<Prisma.BotGroupWhereInput> = botgroupwhereinputSchema as unknown as z.ZodType<Prisma.BotGroupWhereInput>;
export const BotGroupWhereInputObjectZodSchema = botgroupwhereinputSchema;
