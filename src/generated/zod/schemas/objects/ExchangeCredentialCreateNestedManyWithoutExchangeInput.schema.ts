import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialCreateWithoutExchangeInputObjectSchema as ExchangeCredentialCreateWithoutExchangeInputObjectSchema } from './ExchangeCredentialCreateWithoutExchangeInput.schema';
import { ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema as ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema } from './ExchangeCredentialUncheckedCreateWithoutExchangeInput.schema';
import { ExchangeCredentialCreateOrConnectWithoutExchangeInputObjectSchema as ExchangeCredentialCreateOrConnectWithoutExchangeInputObjectSchema } from './ExchangeCredentialCreateOrConnectWithoutExchangeInput.schema';
import { ExchangeCredentialCreateManyExchangeInputEnvelopeObjectSchema as ExchangeCredentialCreateManyExchangeInputEnvelopeObjectSchema } from './ExchangeCredentialCreateManyExchangeInputEnvelope.schema';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './ExchangeCredentialWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeCredentialCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialCreateWithoutExchangeInputObjectSchema).array(), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExchangeCredentialCreateOrConnectWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialCreateOrConnectWithoutExchangeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExchangeCredentialCreateManyExchangeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema), z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ExchangeCredentialCreateNestedManyWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialCreateNestedManyWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateNestedManyWithoutExchangeInput>;
export const ExchangeCredentialCreateNestedManyWithoutExchangeInputObjectZodSchema = makeSchema();
