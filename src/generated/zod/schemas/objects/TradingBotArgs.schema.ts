import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotSelectObjectSchema as TradingBotSelectObjectSchema } from './TradingBotSelect.schema';
import { TradingBotIncludeObjectSchema as TradingBotIncludeObjectSchema } from './TradingBotInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TradingBotSelectObjectSchema).optional(),
  include: z.lazy(() => TradingBotIncludeObjectSchema).optional()
}).strict();
export const TradingBotArgsObjectSchema = makeSchema();
export const TradingBotArgsObjectZodSchema = makeSchema();
