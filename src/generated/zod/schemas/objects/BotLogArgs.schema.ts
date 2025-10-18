import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotLogSelectObjectSchema as BotLogSelectObjectSchema } from './BotLogSelect.schema';
import { BotLogIncludeObjectSchema as BotLogIncludeObjectSchema } from './BotLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BotLogSelectObjectSchema).optional(),
  include: z.lazy(() => BotLogIncludeObjectSchema).optional()
}).strict();
export const BotLogArgsObjectSchema = makeSchema();
export const BotLogArgsObjectZodSchema = makeSchema();
