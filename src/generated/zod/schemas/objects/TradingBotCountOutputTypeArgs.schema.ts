import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCountOutputTypeSelectObjectSchema as TradingBotCountOutputTypeSelectObjectSchema } from './TradingBotCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TradingBotCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TradingBotCountOutputTypeArgsObjectSchema = makeSchema();
export const TradingBotCountOutputTypeArgsObjectZodSchema = makeSchema();
