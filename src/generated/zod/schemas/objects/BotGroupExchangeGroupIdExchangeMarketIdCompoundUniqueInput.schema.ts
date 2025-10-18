import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  groupId: z.string(),
  exchangeMarketId: z.string()
}).strict();
export const BotGroupExchangeGroupIdExchangeMarketIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeGroupIdExchangeMarketIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeGroupIdExchangeMarketIdCompoundUniqueInput>;
export const BotGroupExchangeGroupIdExchangeMarketIdCompoundUniqueInputObjectZodSchema = makeSchema();
