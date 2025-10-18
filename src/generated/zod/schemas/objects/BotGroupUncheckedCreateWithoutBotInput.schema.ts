import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { BotGroupExchangeUncheckedCreateNestedManyWithoutGroupInputObjectSchema as BotGroupExchangeUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './BotGroupExchangeUncheckedCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: GroupKeySchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  exchanges: z.lazy(() => BotGroupExchangeUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const BotGroupUncheckedCreateWithoutBotInputObjectSchema: z.ZodType<Prisma.BotGroupUncheckedCreateWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupUncheckedCreateWithoutBotInput>;
export const BotGroupUncheckedCreateWithoutBotInputObjectZodSchema = makeSchema();
