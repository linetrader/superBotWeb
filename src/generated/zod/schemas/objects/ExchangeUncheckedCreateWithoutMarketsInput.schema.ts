import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialUncheckedCreateNestedManyWithoutExchangeInputObjectSchema as ExchangeCredentialUncheckedCreateNestedManyWithoutExchangeInputObjectSchema } from './ExchangeCredentialUncheckedCreateNestedManyWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  active: z.boolean().optional(),
  supportsFutures: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  credentials: z.lazy(() => ExchangeCredentialUncheckedCreateNestedManyWithoutExchangeInputObjectSchema).optional()
}).strict();
export const ExchangeUncheckedCreateWithoutMarketsInputObjectSchema: z.ZodType<Prisma.ExchangeUncheckedCreateWithoutMarketsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeUncheckedCreateWithoutMarketsInput>;
export const ExchangeUncheckedCreateWithoutMarketsInputObjectZodSchema = makeSchema();
