import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  BotLog: z.boolean().optional(),
  workItems: z.boolean().optional(),
  groups: z.boolean().optional()
}).strict();
export const TradingBotCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TradingBotCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCountOutputTypeSelect>;
export const TradingBotCountOutputTypeSelectObjectZodSchema = makeSchema();
