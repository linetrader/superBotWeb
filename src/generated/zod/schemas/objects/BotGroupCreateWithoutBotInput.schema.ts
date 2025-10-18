import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema';
import { BotGroupExchangeCreateNestedManyWithoutGroupInputObjectSchema as BotGroupExchangeCreateNestedManyWithoutGroupInputObjectSchema } from './BotGroupExchangeCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: GroupKeySchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  exchanges: z.lazy(() => BotGroupExchangeCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const BotGroupCreateWithoutBotInputObjectSchema: z.ZodType<Prisma.BotGroupCreateWithoutBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCreateWithoutBotInput>;
export const BotGroupCreateWithoutBotInputObjectZodSchema = makeSchema();
