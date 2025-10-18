import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumBotStatusFilterObjectSchema as EnumBotStatusFilterObjectSchema } from './EnumBotStatusFilter.schema';
import { BotStatusSchema } from '../enums/BotStatus.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumBotStatusNullableFilterObjectSchema as EnumBotStatusNullableFilterObjectSchema } from './EnumBotStatusNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TradingBotScalarRelationFilterObjectSchema as TradingBotScalarRelationFilterObjectSchema } from './TradingBotScalarRelationFilter.schema';
import { TradingBotWhereInputObjectSchema as TradingBotWhereInputObjectSchema } from './TradingBotWhereInput.schema'

const botruntimewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BotRuntimeWhereInputObjectSchema), z.lazy(() => BotRuntimeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotRuntimeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotRuntimeWhereInputObjectSchema), z.lazy(() => BotRuntimeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  botId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumBotStatusFilterObjectSchema), BotStatusSchema]).optional(),
  pid: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  queueJobId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  startedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  stoppedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  lastHeartbeat: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  lastError: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  workerTaskArn: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  workerRevision: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  desiredState: z.union([z.lazy(() => EnumBotStatusNullableFilterObjectSchema), BotStatusSchema]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  bot: z.union([z.lazy(() => TradingBotScalarRelationFilterObjectSchema), z.lazy(() => TradingBotWhereInputObjectSchema)]).optional()
}).strict();
export const BotRuntimeWhereInputObjectSchema: z.ZodType<Prisma.BotRuntimeWhereInput> = botruntimewhereinputSchema as unknown as z.ZodType<Prisma.BotRuntimeWhereInput>;
export const BotRuntimeWhereInputObjectZodSchema = botruntimewhereinputSchema;
