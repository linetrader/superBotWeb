import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupCountOutputTypeSelectObjectSchema as BotGroupCountOutputTypeSelectObjectSchema } from './BotGroupCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BotGroupCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const BotGroupCountOutputTypeArgsObjectSchema = makeSchema();
export const BotGroupCountOutputTypeArgsObjectZodSchema = makeSchema();
