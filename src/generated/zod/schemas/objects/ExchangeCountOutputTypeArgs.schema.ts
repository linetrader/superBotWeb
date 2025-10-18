import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCountOutputTypeSelectObjectSchema as ExchangeCountOutputTypeSelectObjectSchema } from './ExchangeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ExchangeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ExchangeCountOutputTypeArgsObjectSchema = makeSchema();
export const ExchangeCountOutputTypeArgsObjectZodSchema = makeSchema();
