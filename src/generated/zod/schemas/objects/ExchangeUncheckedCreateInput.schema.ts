import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketUncheckedCreateNestedManyWithoutExchangeInputObjectSchema as ExchangeMarketUncheckedCreateNestedManyWithoutExchangeInputObjectSchema } from './ExchangeMarketUncheckedCreateNestedManyWithoutExchangeInput.schema';
import { ExchangeCredentialUncheckedCreateNestedManyWithoutExchangeInputObjectSchema as ExchangeCredentialUncheckedCreateNestedManyWithoutExchangeInputObjectSchema } from './ExchangeCredentialUncheckedCreateNestedManyWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string().max(20),
  name: z.string().max(50),
  active: z.boolean().optional(),
  supportsFutures: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  markets: z.lazy(() => ExchangeMarketUncheckedCreateNestedManyWithoutExchangeInputObjectSchema),
  credentials: z.lazy(() => ExchangeCredentialUncheckedCreateNestedManyWithoutExchangeInputObjectSchema)
}).strict();
export const ExchangeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ExchangeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeUncheckedCreateInput>;
export const ExchangeUncheckedCreateInputObjectZodSchema = makeSchema();
