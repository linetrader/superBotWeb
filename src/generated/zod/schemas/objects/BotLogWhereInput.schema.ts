import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumLogLevelFilterObjectSchema as EnumLogLevelFilterObjectSchema } from './EnumLogLevelFilter.schema';
import { LogLevelSchema } from '../enums/LogLevel.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TradingBotScalarRelationFilterObjectSchema as TradingBotScalarRelationFilterObjectSchema } from './TradingBotScalarRelationFilter.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema'

const botlogwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BotLogWhereInputObjectSchema), z.lazy(() => BotLogWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotLogWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotLogWhereInputObjectSchema), z.lazy(() => BotLogWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  botId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  level: z.union([z.lazy(() => EnumLogLevelFilterObjectSchema), LogLevelSchema]).optional(),
  message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bot: z.union([z.lazy(() => TradingBotScalarRelationFilterObjectSchema), z.lazy(() => TradingBotWhereInputObjectSchema)]).optional()
}).strict();
export const BotLogWhereInputObjectSchema: z.ZodType<Prisma.BotLogWhereInput> = botlogwhereinputSchema as unknown as z.ZodType<Prisma.BotLogWhereInput>;
export const BotLogWhereInputObjectZodSchema = botlogwhereinputSchema;
