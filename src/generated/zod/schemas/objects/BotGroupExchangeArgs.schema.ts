import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeSelectObjectSchema as BotGroupExchangeSelectObjectSchema } from './BotGroupExchangeSelect.schema';
import { BotGroupExchangeIncludeObjectSchema as BotGroupExchangeIncludeObjectSchema } from './BotGroupExchangeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BotGroupExchangeSelectObjectSchema).optional(),
  include: z.lazy(() => BotGroupExchangeIncludeObjectSchema).optional()
}).strict();
export const BotGroupExchangeArgsObjectSchema = makeSchema();
export const BotGroupExchangeArgsObjectZodSchema = makeSchema();
