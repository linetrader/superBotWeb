import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ExchangeArgsObjectSchema as ExchangeArgsObjectSchema } from './ExchangeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  exchange: z.union([z.boolean(), z.lazy(() => ExchangeArgsObjectSchema)]).optional()
}).strict();
export const ExchangeCredentialIncludeObjectSchema: z.ZodType<Prisma.ExchangeCredentialInclude> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialInclude>;
export const ExchangeCredentialIncludeObjectZodSchema = makeSchema();
