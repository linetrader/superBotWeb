import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { GroupKeySchema } from '../enums/GroupKey.schema'

const makeSchema = () => z.object({
  botId: z.string(),
  key: GroupKeySchema
}).strict();
export const BotGroupBotIdKeyCompoundUniqueInputObjectSchema: z.ZodType<Prisma.BotGroupBotIdKeyCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupBotIdKeyCompoundUniqueInput>;
export const BotGroupBotIdKeyCompoundUniqueInputObjectZodSchema = makeSchema();
