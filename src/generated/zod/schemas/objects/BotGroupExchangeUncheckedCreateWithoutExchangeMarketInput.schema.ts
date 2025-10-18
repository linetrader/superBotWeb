import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  groupId: z.string(),
  enabled: z.boolean().optional(),
  allocationBps: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeUncheckedCreateWithoutExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeUncheckedCreateWithoutExchangeMarketInput>;
export const BotGroupExchangeUncheckedCreateWithoutExchangeMarketInputObjectZodSchema = makeSchema();
