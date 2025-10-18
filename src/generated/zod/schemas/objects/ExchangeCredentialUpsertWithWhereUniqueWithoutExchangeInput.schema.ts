import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './ExchangeCredentialWhereUniqueInput.schema';
import { ExchangeCredentialUpdateWithoutExchangeInputObjectSchema as ExchangeCredentialUpdateWithoutExchangeInputObjectSchema } from './ExchangeCredentialUpdateWithoutExchangeInput.schema';
import { ExchangeCredentialUncheckedUpdateWithoutExchangeInputObjectSchema as ExchangeCredentialUncheckedUpdateWithoutExchangeInputObjectSchema } from './ExchangeCredentialUncheckedUpdateWithoutExchangeInput.schema';
import { ExchangeCredentialCreateWithoutExchangeInputObjectSchema as ExchangeCredentialCreateWithoutExchangeInputObjectSchema } from './ExchangeCredentialCreateWithoutExchangeInput.schema';
import { ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema as ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema } from './ExchangeCredentialUncheckedCreateWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ExchangeCredentialUpdateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedUpdateWithoutExchangeInputObjectSchema)]),
  create: z.union([z.lazy(() => ExchangeCredentialCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema)])
}).strict();
export const ExchangeCredentialUpsertWithWhereUniqueWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUpsertWithWhereUniqueWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUpsertWithWhereUniqueWithoutExchangeInput>;
export const ExchangeCredentialUpsertWithWhereUniqueWithoutExchangeInputObjectZodSchema = makeSchema();
