import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  botId: z.string(),
  key: GroupKeySchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BotGroupUncheckedCreateWithoutExchangesInputObjectSchema: z.ZodType<Prisma.BotGroupUncheckedCreateWithoutExchangesInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUncheckedCreateWithoutExchangesInput>;
export const BotGroupUncheckedCreateWithoutExchangesInputObjectZodSchema = makeSchema();
