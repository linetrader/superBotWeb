import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeCreateManyExchangeMarketInputObjectSchema as BotGroupExchangeCreateManyExchangeMarketInputObjectSchema } from './BotGroupExchangeCreateManyExchangeMarketInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BotGroupExchangeCreateManyExchangeMarketInputObjectSchema), z.lazy(() => BotGroupExchangeCreateManyExchangeMarketInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BotGroupExchangeCreateManyExchangeMarketInputEnvelopeObjectSchema: z.ZodType<Prisma.BotGroupExchangeCreateManyExchangeMarketInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateManyExchangeMarketInputEnvelope>;
export const BotGroupExchangeCreateManyExchangeMarketInputEnvelopeObjectZodSchema = makeSchema();
