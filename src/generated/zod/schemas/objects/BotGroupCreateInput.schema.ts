import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { TradingBotCreateNestedOneWithoutGroupsInputObjectSchema as TradingBotCreateNestedOneWithoutGroupsInputObjectSchema } from './TradingBotCreateNestedOneWithoutGroupsInput.schema';
import { BotGroupExchangeCreateNestedManyWithoutGroupInputObjectSchema as BotGroupExchangeCreateNestedManyWithoutGroupInputObjectSchema } from './BotGroupExchangeCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: GroupKeySchema,
  createdAt: z.coerce.date().optional(),
  bot: z.lazy(() => TradingBotCreateNestedOneWithoutGroupsInputObjectSchema),
  exchanges: z.lazy(() => BotGroupExchangeCreateNestedManyWithoutGroupInputObjectSchema)
}).strict();
export const BotGroupCreateInputObjectSchema: z.ZodType<Prisma.BotGroupCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCreateInput>;
export const BotGroupCreateInputObjectZodSchema = makeSchema();
