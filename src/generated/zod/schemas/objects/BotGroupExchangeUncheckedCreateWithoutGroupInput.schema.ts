import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  exchangeMarketId: z.string(),
  enabled: z.boolean().optional(),
  allocationBps: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BotGroupExchangeUncheckedCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUncheckedCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUncheckedCreateWithoutGroupInput>;
export const BotGroupExchangeUncheckedCreateWithoutGroupInputObjectZodSchema = makeSchema();
