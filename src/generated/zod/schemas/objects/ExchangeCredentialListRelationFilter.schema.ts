import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialWhereInputObjectSchema as ExchangeCredentialWhereInputObjectSchema } from './ExchangeCredentialWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ExchangeCredentialWhereInputObjectSchema).optional(),
  some: z.lazy(() => ExchangeCredentialWhereInputObjectSchema).optional(),
  none: z.lazy(() => ExchangeCredentialWhereInputObjectSchema).optional()
}).strict();
export const ExchangeCredentialListRelationFilterObjectSchema: z.ZodType<Prisma.ExchangeCredentialListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialListRelationFilter>;
export const ExchangeCredentialListRelationFilterObjectZodSchema = makeSchema();
