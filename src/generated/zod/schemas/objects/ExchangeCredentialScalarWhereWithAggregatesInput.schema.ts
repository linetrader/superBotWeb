import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const exchangecredentialscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ExchangeCredentialScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ExchangeCredentialScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExchangeCredentialScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExchangeCredentialScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ExchangeCredentialScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  exchangeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  apiKeyCipher: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  apiKeyIv: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  apiKeyTag: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  secretCipher: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  secretIv: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  secretTag: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  keyAlg: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  keyVersion: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ExchangeCredentialScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialScalarWhereWithAggregatesInput> = exchangecredentialscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ExchangeCredentialScalarWhereWithAggregatesInput>;
export const ExchangeCredentialScalarWhereWithAggregatesInputObjectZodSchema = exchangecredentialscalarwherewithaggregatesinputSchema;
