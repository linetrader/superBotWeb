import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialCreateManyUserInputObjectSchema as ExchangeCredentialCreateManyUserInputObjectSchema } from './ExchangeCredentialCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ExchangeCredentialCreateManyUserInputObjectSchema), z.lazy(() => ExchangeCredentialCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ExchangeCredentialCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ExchangeCredentialCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateManyUserInputEnvelope>;
export const ExchangeCredentialCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
