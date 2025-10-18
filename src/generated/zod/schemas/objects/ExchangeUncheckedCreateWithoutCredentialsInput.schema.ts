import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeMarketUncheckedCreateNestedManyWithoutExchangeInputObjectSchema as ExchangeMarketUncheckedCreateNestedManyWithoutExchangeInputObjectSchema } from './ExchangeMarketUncheckedCreateNestedManyWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  code: z.string(),
  name: z.string(),
  active: z.boolean().optional(),
  supportsFutures: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  markets: z.lazy(() => ExchangeMarketUncheckedCreateNestedManyWithoutExchangeInputObjectSchema).optional()
}).strict();
export const ExchangeUncheckedCreateWithoutCredentialsInputObjectSchema: z.ZodType<Prisma.ExchangeUncheckedCreateWithoutCredentialsInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeUncheckedCreateWithoutCredentialsInput>;
export const ExchangeUncheckedCreateWithoutCredentialsInputObjectZodSchema = makeSchema();
