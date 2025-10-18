import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const botgroupexchangescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => BotGroupExchangeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BotGroupExchangeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotGroupExchangeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotGroupExchangeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BotGroupExchangeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  groupId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  exchangeMarketId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  enabled: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  allocationBps: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BotGroupExchangeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeScalarWhereWithAggregatesInput> = botgroupexchangescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.BotGroupExchangeScalarWhereWithAggregatesInput>;
export const BotGroupExchangeScalarWhereWithAggregatesInputObjectZodSchema = botgroupexchangescalarwherewithaggregatesinputSchema;
