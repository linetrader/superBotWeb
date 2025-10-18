import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupSelectObjectSchema as BotGroupSelectObjectSchema } from './BotGroupSelect.schema';
import { BotGroupIncludeObjectSchema as BotGroupIncludeObjectSchema } from './BotGroupInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BotGroupSelectObjectSchema).optional(),
  include: z.lazy(() => BotGroupIncludeObjectSchema).optional()
}).strict();
export const BotGroupArgsObjectSchema = makeSchema();
export const BotGroupArgsObjectZodSchema = makeSchema();
