import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialCreateWithoutUserInputObjectSchema as ExchangeCredentialCreateWithoutUserInputObjectSchema } from './ExchangeCredentialCreateWithoutUserInput.schema';
import { ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema as ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema } from './ExchangeCredentialUncheckedCreateWithoutUserInput.schema';
import { ExchangeCredentialCreateOrConnectWithoutUserInputObjectSchema as ExchangeCredentialCreateOrConnectWithoutUserInputObjectSchema } from './ExchangeCredentialCreateOrConnectWithoutUserInput.schema';
import { ExchangeCredentialCreateManyUserInputEnvelopeObjectSchema as ExchangeCredentialCreateManyUserInputEnvelopeObjectSchema } from './ExchangeCredentialCreateManyUserInputEnvelope.schema';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './ExchangeCredentialWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeCredentialCreateWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExchangeCredentialCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExchangeCredentialCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema), z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUncheckedCreateNestedManyWithoutUserInput>;
export const ExchangeCredentialUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
