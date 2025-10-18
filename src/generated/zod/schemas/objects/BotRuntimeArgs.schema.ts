import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotRuntimeSelectObjectSchema as BotRuntimeSelectObjectSchema } from './BotRuntimeSelect.schema';
import { BotRuntimeIncludeObjectSchema as BotRuntimeIncludeObjectSchema } from './BotRuntimeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BotRuntimeSelectObjectSchema).optional(),
  include: z.lazy(() => BotRuntimeIncludeObjectSchema).optional()
}).strict();
export const BotRuntimeArgsObjectSchema = makeSchema();
export const BotRuntimeArgsObjectZodSchema = makeSchema();
