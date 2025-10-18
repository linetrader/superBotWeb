import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCreateNestedManyWithoutExchangeInputObjectSchema as ExchangeMarketCreateNestedManyWithoutExchangeInputObjectSchema } from './ExchangeMarketCreateNestedManyWithoutExchangeInput.schema';
import { ExchangeCredentialCreateNestedManyWithoutExchangeInputObjectSchema as ExchangeCredentialCreateNestedManyWithoutExchangeInputObjectSchema } from './ExchangeCredentialCreateNestedManyWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string().max(20),
  name: z.string().max(50),
  active: z.boolean().optional(),
  supportsFutures: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  markets: z.lazy(() => ExchangeMarketCreateNestedManyWithoutExchangeInputObjectSchema),
  credentials: z.lazy(() => ExchangeCredentialCreateNestedManyWithoutExchangeInputObjectSchema)
}).strict();
export const ExchangeCreateInputObjectSchema: z.ZodType<Prisma.ExchangeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCreateInput>;
export const ExchangeCreateInputObjectZodSchema = makeSchema();
