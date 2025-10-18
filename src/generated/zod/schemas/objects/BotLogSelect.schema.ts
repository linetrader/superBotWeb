import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotArgsObjectSchema as TradingBotArgsObjectSchema } from './TradingBotArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  botId: z.boolean().optional(),
  bot: z.union([z.boolean(), z.lazy(() => TradingBotArgsObjectSchema)]).optional(),
  level: z.boolean().optional(),
  message: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const BotLogSelectObjectSchema: z.ZodType<Prisma.BotLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.BotLogSelect>;
export const BotLogSelectObjectZodSchema = makeSchema();
