import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupCreateManyBotInputObjectSchema as BotGroupCreateManyBotInputObjectSchema } from './BotGroupCreateManyBotInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BotGroupCreateManyBotInputObjectSchema), z.lazy(() => BotGroupCreateManyBotInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BotGroupCreateManyBotInputEnvelopeObjectSchema: z.ZodType<Prisma.BotGroupCreateManyBotInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCreateManyBotInputEnvelope>;
export const BotGroupCreateManyBotInputEnvelopeObjectZodSchema = makeSchema();
