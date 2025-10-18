import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotArgsObjectSchema as TradingBotArgsObjectSchema } from './TradingBotArgs.schema'

const makeSchema = () => z.object({
  bot: z.union([z.boolean(), z.lazy(() => TradingBotArgsObjectSchema)]).optional()
}).strict();
export const BotLogIncludeObjectSchema: z.ZodType<Prisma.BotLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.BotLogInclude>;
export const BotLogIncludeObjectZodSchema = makeSchema();
