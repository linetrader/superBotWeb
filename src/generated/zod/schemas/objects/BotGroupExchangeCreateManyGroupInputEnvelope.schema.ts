import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotGroupExchangeCreateManyGroupInputObjectSchema as BotGroupExchangeCreateManyGroupInputObjectSchema } from './BotGroupExchangeCreateManyGroupInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BotGroupExchangeCreateManyGroupInputObjectSchema), z.lazy(() => BotGroupExchangeCreateManyGroupInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BotGroupExchangeCreateManyGroupInputEnvelopeObjectSchema: z.ZodType<Prisma.BotGroupExchangeCreateManyGroupInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeCreateManyGroupInputEnvelope>;
export const BotGroupExchangeCreateManyGroupInputEnvelopeObjectZodSchema = makeSchema();
