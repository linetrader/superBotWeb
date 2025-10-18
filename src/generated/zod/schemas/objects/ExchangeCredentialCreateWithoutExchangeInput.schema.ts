import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutExchangeCredentialsInputObjectSchema as UserCreateNestedOneWithoutExchangeCredentialsInputObjectSchema } from './UserCreateNestedOneWithoutExchangeCredentialsInput.schema'

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
  user: z.lazy(() => UserCreateNestedOneWithoutExchangeCredentialsInputObjectSchema)
}).strict();
export const ExchangeCredentialCreateWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialCreateWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateWithoutExchangeInput>;
export const ExchangeCredentialCreateWithoutExchangeInputObjectZodSchema = makeSchema();
