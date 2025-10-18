import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeSelectObjectSchema as ExchangeSelectObjectSchema } from './ExchangeSelect.schema';
import { ExchangeIncludeObjectSchema as ExchangeIncludeObjectSchema } from './ExchangeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ExchangeSelectObjectSchema).optional(),
  include: z.lazy(() => ExchangeIncludeObjectSchema).optional()
}).strict();
export const ExchangeArgsObjectSchema = makeSchema();
export const ExchangeArgsObjectZodSchema = makeSchema();
