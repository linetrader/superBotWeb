import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCreateNestedOneWithoutCredentialsInputObjectSchema as ExchangeCreateNestedOneWithoutCredentialsInputObjectSchema } from './ExchangeCreateNestedOneWithoutCredentialsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  apiKeyCipher: z.string(),
  apiKeyIv: z.string(),
  apiKeyTag: z.string(),
  secretCipher: z.string(),
  secretIv: z.string(),
  secretTag: z.string(),
  keyAlg: z.string().optional(),
  keyVersion: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  exchange: z.lazy(() => ExchangeCreateNestedOneWithoutCredentialsInputObjectSchema)
}).strict();
export const ExchangeCredentialCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateWithoutUserInput>;
export const ExchangeCredentialCreateWithoutUserInputObjectZodSchema = makeSchema();
