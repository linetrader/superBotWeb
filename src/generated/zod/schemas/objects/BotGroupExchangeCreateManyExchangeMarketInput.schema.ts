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
export const BotGroupExchangeCreateManyExchangeMarketInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeCreateManyExchangeMarketInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateManyExchangeMarketInput>;
export const BotGroupExchangeCreateManyExchangeMarketInputObjectZodSchema = makeSchema();
