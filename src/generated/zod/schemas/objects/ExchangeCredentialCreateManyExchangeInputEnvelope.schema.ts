import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialCreateManyExchangeInputObjectSchema as ExchangeCredentialCreateManyExchangeInputObjectSchema } from './ExchangeCredentialCreateManyExchangeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ExchangeCredentialCreateManyExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialCreateManyExchangeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ExchangeCredentialCreateManyExchangeInputEnvelopeObjectSchema: z.ZodType<Prisma.ExchangeCredentialCreateManyExchangeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateManyExchangeInputEnvelope>;
export const ExchangeCredentialCreateManyExchangeInputEnvelopeObjectZodSchema = makeSchema();
