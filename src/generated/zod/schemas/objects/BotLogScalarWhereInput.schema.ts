import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumLogLevelFilterObjectSchema as EnumLogLevelFilterObjectSchema } from './EnumLogLevelFilter.schema';
import { LogLevelSchema } from '../enums/LogLevel.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const botlogscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BotLogScalarWhereInputObjectSchema), z.lazy(() => BotLogScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotLogScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotLogScalarWhereInputObjectSchema), z.lazy(() => BotLogScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  botId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  level: z.union([z.lazy(() => EnumLogLevelFilterObjectSchema), LogLevelSchema]).optional(),
  message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BotLogScalarWhereInputObjectSchema: z.ZodType<Prisma.BotLogScalarWhereInput> = botlogscalarwhereinputSchema as unknown as z.ZodType<Prisma.BotLogScalarWhereInput>;
export const BotLogScalarWhereInputObjectZodSchema = botlogscalarwhereinputSchema;
