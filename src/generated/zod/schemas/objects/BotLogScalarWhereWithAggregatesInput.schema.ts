import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumLogLevelWithAggregatesFilterObjectSchema as EnumLogLevelWithAggregatesFilterObjectSchema } from './EnumLogLevelWithAggregatesFilter.schema';
import { LogLevelSchema } from '../enums/LogLevel.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const botlogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BotLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BotLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BotLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  botId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  level: z.union([z.lazy(() => EnumLogLevelWithAggregatesFilterObjectSchema), LogLevelSchema]).optional(),
  message: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BotLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BotLogScalarWhereWithAggregatesInput> = botlogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BotLogScalarWhereWithAggregatesInput>;
export const BotLogScalarWhereWithAggregatesInputObjectZodSchema = botlogscalarwherewithaggregatesinputSchema;
