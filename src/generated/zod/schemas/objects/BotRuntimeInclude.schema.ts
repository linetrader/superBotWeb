import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotArgsObjectSchema as TradingBotArgsObjectSchema } from './TradingBotArgs.schema'

const makeSchema = () => z.object({
  bot: z.union([z.boolean(), z.lazy(() => TradingBotArgsObjectSchema)]).optional()
}).strict();
export const BotRuntimeIncludeObjectSchema: z.ZodType<Prisma.BotRuntimeInclude> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeInclude>;
export const BotRuntimeIncludeObjectZodSchema = makeSchema();
