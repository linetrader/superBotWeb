import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ExchangeScalarRelationFilterObjectSchema as ExchangeScalarRelationFilterObjectSchema } from './ExchangeScalarRelationFilter.schema';
import { ExchangeWhereInputObjectSchema as ExchangeWhereInputObjectSchema } from './ExchangeWhereInput.schema'

const exchangecredentialwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ExchangeCredentialWhereInputObjectSchema), z.lazy(() => ExchangeCredentialWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ExchangeCredentialWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ExchangeCredentialWhereInputObjectSchema), z.lazy(() => ExchangeCredentialWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  exchange: z.union([z.lazy(() => ExchangeScalarRelationFilterObjectSchema), z.lazy(() => ExchangeWhereInputObjectSchema)]).optional()
}).strict();
export const ExchangeCredentialWhereInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialWhereInput> = exchangecredentialwhereinputSchema as unknown as z.ZodType<Prisma.ExchangeCredentialWhereInput>;
export const ExchangeCredentialWhereInputObjectZodSchema = exchangecredentialwhereinputSchema;
