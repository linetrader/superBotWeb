import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { TradingBotCreateNestedOneWithoutGroupsInputObjectSchema as TradingBotCreateNestedOneWithoutGroupsInputObjectSchema } from './TradingBotCreateNestedOneWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: GroupKeySchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bot: z.lazy(() => TradingBotCreateNestedOneWithoutGroupsInputObjectSchema)
}).strict();
export const BotGroupCreateWithoutExchangesInputObjectSchema: z.ZodType<Prisma.BotGroupCreateWithoutExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCreateWithoutExchangesInput>;
export const BotGroupCreateWithoutExchangesInputObjectZodSchema = makeSchema();
