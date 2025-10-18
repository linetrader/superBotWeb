import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCountOutputTypeSelectObjectSchema as ExchangeMarketCountOutputTypeSelectObjectSchema } from './ExchangeMarketCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ExchangeMarketCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ExchangeMarketCountOutputTypeArgsObjectSchema = makeSchema();
export const ExchangeMarketCountOutputTypeArgsObjectZodSchema = makeSchema();
