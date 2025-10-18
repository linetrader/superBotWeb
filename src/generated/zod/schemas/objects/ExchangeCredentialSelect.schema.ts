import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ExchangeArgsObjectSchema as ExchangeArgsObjectSchema } from './ExchangeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  exchangeId: z.boolean().optional(),
  exchange: z.union([z.boolean(), z.lazy(() => ExchangeArgsObjectSchema)]).optional(),
  apiKeyCipher: z.boolean().optional(),
  apiKeyIv: z.boolean().optional(),
  apiKeyTag: z.boolean().optional(),
  secretCipher: z.boolean().optional(),
  secretIv: z.boolean().optional(),
  secretTag: z.boolean().optional(),
  keyAlg: z.boolean().optional(),
  keyVersion: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ExchangeCredentialSelectObjectSchema: z.ZodType<Prisma.ExchangeCredentialSelect> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialSelect>;
export const ExchangeCredentialSelectObjectZodSchema = makeSchema();
