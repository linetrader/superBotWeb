import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const exchangecredentialscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema), z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema), z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  exchangeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  apiKeyCipher: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  apiKeyIv: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  apiKeyTag: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  secretCipher: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  secretIv: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  secretTag: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  keyAlg: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  keyVersion: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ExchangeCredentialScalarWhereInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialScalarWhereInput> = exchangecredentialscalarwhereinputSchema as unknown as z.ZodType<Prisma.ExchangeCredentialScalarWhereInput>;
export const ExchangeCredentialScalarWhereInputObjectZodSchema = exchangecredentialscalarwhereinputSchema;
