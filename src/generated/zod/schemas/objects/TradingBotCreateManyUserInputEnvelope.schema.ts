import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotCreateManyUserInputObjectSchema as TradingBotCreateManyUserInputObjectSchema } from './TradingBotCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TradingBotCreateManyUserInputObjectSchema), z.lazy(() => TradingBotCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TradingBotCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TradingBotCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TradingBotCreateManyUserInputEnvelope>;
export const TradingBotCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
