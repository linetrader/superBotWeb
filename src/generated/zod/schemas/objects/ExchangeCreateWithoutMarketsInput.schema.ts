import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialCreateNestedManyWithoutExchangeInputObjectSchema as ExchangeCredentialCreateNestedManyWithoutExchangeInputObjectSchema } from './ExchangeCredentialCreateNestedManyWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string().max(20),
  name: z.string().max(50),
  active: z.boolean().optional(),
  supportsFutures: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  credentials: z.lazy(() => ExchangeCredentialCreateNestedManyWithoutExchangeInputObjectSchema).optional()
}).strict();
export const ExchangeCreateWithoutMarketsInputObjectSchema: z.ZodType<Prisma.ExchangeCreateWithoutMarketsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCreateWithoutMarketsInput>;
export const ExchangeCreateWithoutMarketsInputObjectZodSchema = makeSchema();
