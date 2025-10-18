import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotLogCreateManyBotInputObjectSchema as BotLogCreateManyBotInputObjectSchema } from './BotLogCreateManyBotInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BotLogCreateManyBotInputObjectSchema), z.lazy(() => BotLogCreateManyBotInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BotLogCreateManyBotInputEnvelopeObjectSchema: z.ZodType<Prisma.BotLogCreateManyBotInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BotLogCreateManyBotInputEnvelope>;
export const BotLogCreateManyBotInputEnvelopeObjectZodSchema = makeSchema();
