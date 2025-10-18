import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const botgroupexchangescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema), z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema), z.lazy(() => BotGroupExchangeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  groupId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  exchangeMarketId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  allocationBps: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const BotGroupExchangeScalarWhereInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeScalarWhereInput> = botgroupexchangescalarwhereinputSchema as unknown as z.ZodType<Prisma.BotGroupExchangeScalarWhereInput>;
export const BotGroupExchangeScalarWhereInputObjectZodSchema = botgroupexchangescalarwhereinputSchema;
