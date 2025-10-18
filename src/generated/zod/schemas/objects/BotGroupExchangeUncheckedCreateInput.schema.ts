import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  groupId: z.string(),
  exchangeMarketId: z.string(),
  enabled: z.boolean().optional(),
  allocationBps: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const BotGroupExchangeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUncheckedCreateInput>;
export const BotGroupExchangeUncheckedCreateInputObjectZodSchema = makeSchema();
