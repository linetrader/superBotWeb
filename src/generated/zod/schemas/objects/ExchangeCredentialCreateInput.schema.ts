import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutExchangeCredentialsInputObjectSchema as UserCreateNestedOneWithoutExchangeCredentialsInputObjectSchema } from './UserCreateNestedOneWithoutExchangeCredentialsInput.schema';
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
  user: z.lazy(() => UserCreateNestedOneWithoutExchangeCredentialsInputObjectSchema),
  exchange: z.lazy(() => ExchangeCreateNestedOneWithoutCredentialsInputObjectSchema)
}).strict();
export const ExchangeCredentialCreateInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateInput>;
export const ExchangeCredentialCreateInputObjectZodSchema = makeSchema();
