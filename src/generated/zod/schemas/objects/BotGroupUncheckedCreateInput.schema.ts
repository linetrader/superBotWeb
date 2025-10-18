import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { BotGroupExchangeUncheckedCreateNestedManyWithoutGroupInputObjectSchema as BotGroupExchangeUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './BotGroupExchangeUncheckedCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  botId: z.string(),
  key: GroupKeySchema,
  createdAt: z.coerce.date().optional(),
  exchanges: z.lazy(() => BotGroupExchangeUncheckedCreateNestedManyWithoutGroupInputObjectSchema)
}).strict();
export const BotGroupUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BotGroupUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUncheckedCreateInput>;
export const BotGroupUncheckedCreateInputObjectZodSchema = makeSchema();
