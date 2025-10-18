import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketCreateNestedManyWithoutExchangeInputObjectSchema as ExchangeMarketCreateNestedManyWithoutExchangeInputObjectSchema } from './ExchangeMarketCreateNestedManyWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string().max(20),
  name: z.string().max(50),
  active: z.boolean().optional(),
  supportsFutures: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  markets: z.lazy(() => ExchangeMarketCreateNestedManyWithoutExchangeInputObjectSchema).optional()
}).strict();
export const ExchangeCreateWithoutCredentialsInputObjectSchema: z.ZodType<Prisma.ExchangeCreateWithoutCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCreateWithoutCredentialsInput>;
export const ExchangeCreateWithoutCredentialsInputObjectZodSchema = makeSchema();
