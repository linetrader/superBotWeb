import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  key: GroupKeySchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BotGroupCreateManyBotInputObjectSchema: z.ZodType<Prisma.BotGroupCreateManyBotInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCreateManyBotInput>;
export const BotGroupCreateManyBotInputObjectZodSchema = makeSchema();
