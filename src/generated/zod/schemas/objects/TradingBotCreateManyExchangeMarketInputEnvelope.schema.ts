import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateManyExchangeMarketInputObjectSchema as TradingBotCreateManyExchangeMarketInputObjectSchema } from './TradingBotCreateManyExchangeMarketInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TradingBotCreateManyExchangeMarketInputObjectSchema), z.lazy(() => TradingBotCreateManyExchangeMarketInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TradingBotCreateManyExchangeMarketInputEnvelopeObjectSchema: z.ZodType<Prisma.TradingBotCreateManyExchangeMarketInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateManyExchangeMarketInputEnvelope>;
export const TradingBotCreateManyExchangeMarketInputEnvelopeObjectZodSchema = makeSchema();
