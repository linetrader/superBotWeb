import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateManyStrategyConfigInputObjectSchema as TradingBotCreateManyStrategyConfigInputObjectSchema } from './TradingBotCreateManyStrategyConfigInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TradingBotCreateManyStrategyConfigInputObjectSchema), z.lazy(() => TradingBotCreateManyStrategyConfigInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TradingBotCreateManyStrategyConfigInputEnvelopeObjectSchema: z.ZodType<Prisma.TradingBotCreateManyStrategyConfigInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateManyStrategyConfigInputEnvelope>;
export const TradingBotCreateManyStrategyConfigInputEnvelopeObjectZodSchema = makeSchema();
