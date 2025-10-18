import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketFindManySchema as ExchangeMarketFindManySchema } from '../findManyExchangeMarket.schema';
import { ExchangeCredentialFindManySchema as ExchangeCredentialFindManySchema } from '../findManyExchangeCredential.schema';
import { ExchangeCountOutputTypeArgsObjectSchema as ExchangeCountOutputTypeArgsObjectSchema } from './ExchangeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  active: z.boolean().optional(),
  supportsFutures: z.boolean().optional(),
  markets: z.union([z.boolean(), z.lazy(() => ExchangeMarketFindManySchema)]).optional(),
  credentials: z.union([z.boolean(), z.lazy(() => ExchangeCredentialFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ExchangeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ExchangeSelectObjectSchema: z.ZodType<Prisma.ExchangeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeSelect>;
export const ExchangeSelectObjectZodSchema = makeSchema();
