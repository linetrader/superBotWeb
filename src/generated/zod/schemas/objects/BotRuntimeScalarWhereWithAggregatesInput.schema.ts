import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumBotStatusWithAggregatesFilterObjectSchema as EnumBotStatusWithAggregatesFilterObjectSchema } from './EnumBotStatusWithAggregatesFilter.schema';
import { BotStatusSchema } from '../enums/BotStatus.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { EnumBotStatusNullableWithAggregatesFilterObjectSchema as EnumBotStatusNullableWithAggregatesFilterObjectSchema } from './EnumBotStatusNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const botruntimescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BotRuntimeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BotRuntimeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotRuntimeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotRuntimeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BotRuntimeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  botId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumBotStatusWithAggregatesFilterObjectSchema), BotStatusSchema]).optional(),
  pid: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  queueJobId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  startedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  stoppedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  lastHeartbeat: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  lastError: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  workerTaskArn: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  workerRevision: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  desiredState: z.union([z.lazy(() => EnumBotStatusNullableWithAggregatesFilterObjectSchema), BotStatusSchema]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BotRuntimeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BotRuntimeScalarWhereWithAggregatesInput> = botruntimescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BotRuntimeScalarWhereWithAggregatesInput>;
export const BotRuntimeScalarWhereWithAggregatesInputObjectZodSchema = botruntimescalarwherewithaggregatesinputSchema;
