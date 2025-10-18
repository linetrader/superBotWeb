import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  exchangeId: z.string(),
  apiKeyCipher: z.string(),
  apiKeyIv: z.string(),
  apiKeyTag: z.string(),
  secretCipher: z.string(),
  secretIv: z.string(),
  secretTag: z.string(),
  keyAlg: z.string().optional(),
  keyVersion: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUncheckedCreateWithoutUserInput>;
export const ExchangeCredentialUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
