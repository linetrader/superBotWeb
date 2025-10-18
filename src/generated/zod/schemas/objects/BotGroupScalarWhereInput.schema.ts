import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumGroupKeyFilterObjectSchema as EnumGroupKeyFilterObjectSchema } from './EnumGroupKeyFilter.schema';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const botgroupscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BotGroupScalarWhereInputObjectSchema), z.lazy(() => BotGroupScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotGroupScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotGroupScalarWhereInputObjectSchema), z.lazy(() => BotGroupScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  botId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => EnumGroupKeyFilterObjectSchema), GroupKeySchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BotGroupScalarWhereInputObjectSchema: z.ZodType<Prisma.BotGroupScalarWhereInput> = botgroupscalarwhereinputSchema as unknown as z.ZodType<Prisma.BotGroupScalarWhereInput>;
export const BotGroupScalarWhereInputObjectZodSchema = botgroupscalarwhereinputSchema;
