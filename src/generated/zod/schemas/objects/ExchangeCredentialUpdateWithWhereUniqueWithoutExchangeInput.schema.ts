import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './ExchangeCredentialWhereUniqueInput.schema';
import { ExchangeCredentialUpdateWithoutExchangeInputObjectSchema as ExchangeCredentialUpdateWithoutExchangeInputObjectSchema } from './ExchangeCredentialUpdateWithoutExchangeInput.schema';
import { ExchangeCredentialUncheckedUpdateWithoutExchangeInputObjectSchema as ExchangeCredentialUncheckedUpdateWithoutExchangeInputObjectSchema } from './ExchangeCredentialUncheckedUpdateWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ExchangeCredentialUpdateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedUpdateWithoutExchangeInputObjectSchema)])
}).strict();
export const ExchangeCredentialUpdateWithWhereUniqueWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUpdateWithWhereUniqueWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUpdateWithWhereUniqueWithoutExchangeInput>;
export const ExchangeCredentialUpdateWithWhereUniqueWithoutExchangeInputObjectZodSchema = makeSchema();
