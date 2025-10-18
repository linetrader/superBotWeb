import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketSelectObjectSchema as ExchangeMarketSelectObjectSchema } from './ExchangeMarketSelect.schema';
import { ExchangeMarketIncludeObjectSchema as ExchangeMarketIncludeObjectSchema } from './ExchangeMarketInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ExchangeMarketSelectObjectSchema).optional(),
  include: z.lazy(() => ExchangeMarketIncludeObjectSchema).optional()
}).strict();
export const ExchangeMarketArgsObjectSchema = makeSchema();
export const ExchangeMarketArgsObjectZodSchema = makeSchema();
