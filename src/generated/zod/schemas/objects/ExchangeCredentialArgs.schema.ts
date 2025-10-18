import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialSelectObjectSchema as ExchangeCredentialSelectObjectSchema } from './ExchangeCredentialSelect.schema';
import { ExchangeCredentialIncludeObjectSchema as ExchangeCredentialIncludeObjectSchema } from './ExchangeCredentialInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ExchangeCredentialSelectObjectSchema).optional(),
  include: z.lazy(() => ExchangeCredentialIncludeObjectSchema).optional()
}).strict();
export const ExchangeCredentialArgsObjectSchema = makeSchema();
export const ExchangeCredentialArgsObjectZodSchema = makeSchema();
