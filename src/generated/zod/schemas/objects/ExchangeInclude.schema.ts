import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketFindManySchema as ExchangeMarketFindManySchema } from '../findManyExchangeMarket.schema';
import { ExchangeCredentialFindManySchema as ExchangeCredentialFindManySchema } from '../findManyExchangeCredential.schema';
import { ExchangeCountOutputTypeArgsObjectSchema as ExchangeCountOutputTypeArgsObjectSchema } from './ExchangeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  markets: z.union([z.boolean(), z.lazy(() => ExchangeMarketFindManySchema)]).optional(),
  credentials: z.union([z.boolean(), z.lazy(() => ExchangeCredentialFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ExchangeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ExchangeIncludeObjectSchema: z.ZodType<Prisma.ExchangeInclude> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeInclude>;
export const ExchangeIncludeObjectZodSchema = makeSchema();
