import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCreateManyExchangeInputObjectSchema as ExchangeMarketCreateManyExchangeInputObjectSchema } from './ExchangeMarketCreateManyExchangeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ExchangeMarketCreateManyExchangeInputObjectSchema), z.lazy(() => ExchangeMarketCreateManyExchangeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ExchangeMarketCreateManyExchangeInputEnvelopeObjectSchema: z.ZodType<Prisma.ExchangeMarketCreateManyExchangeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeMarketCreateManyExchangeInputEnvelope>;
export const ExchangeMarketCreateManyExchangeInputEnvelopeObjectZodSchema = makeSchema();
