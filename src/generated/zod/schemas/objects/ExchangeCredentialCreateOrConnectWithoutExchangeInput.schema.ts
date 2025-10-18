import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './ExchangeCredentialWhereUniqueInput.schema';
import { ExchangeCredentialCreateWithoutExchangeInputObjectSchema as ExchangeCredentialCreateWithoutExchangeInputObjectSchema } from './ExchangeCredentialCreateWithoutExchangeInput.schema';
import { ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema as ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema } from './ExchangeCredentialUncheckedCreateWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExchangeCredentialCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema)])
}).strict();
export const ExchangeCredentialCreateOrConnectWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialCreateOrConnectWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateOrConnectWithoutExchangeInput>;
export const ExchangeCredentialCreateOrConnectWithoutExchangeInputObjectZodSchema = makeSchema();
