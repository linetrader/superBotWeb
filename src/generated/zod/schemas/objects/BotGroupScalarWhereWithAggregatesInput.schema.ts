import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumGroupKeyWithAggregatesFilterObjectSchema as EnumGroupKeyWithAggregatesFilterObjectSchema } from './EnumGroupKeyWithAggregatesFilter.schema';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const botgroupscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BotGroupScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BotGroupScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotGroupScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotGroupScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BotGroupScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  botId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  key: z.union([z.lazy(() => EnumGroupKeyWithAggregatesFilterObjectSchema), GroupKeySchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BotGroupScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BotGroupScalarWhereWithAggregatesInput> = botgroupscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BotGroupScalarWhereWithAggregatesInput>;
export const BotGroupScalarWhereWithAggregatesInputObjectZodSchema = botgroupscalarwherewithaggregatesinputSchema;
