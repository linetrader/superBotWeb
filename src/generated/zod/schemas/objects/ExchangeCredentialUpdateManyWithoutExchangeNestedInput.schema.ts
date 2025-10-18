import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialCreateWithoutExchangeInputObjectSchema as ExchangeCredentialCreateWithoutExchangeInputObjectSchema } from './ExchangeCredentialCreateWithoutExchangeInput.schema';
import { ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema as ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema } from './ExchangeCredentialUncheckedCreateWithoutExchangeInput.schema';
import { ExchangeCredentialCreateOrConnectWithoutExchangeInputObjectSchema as ExchangeCredentialCreateOrConnectWithoutExchangeInputObjectSchema } from './ExchangeCredentialCreateOrConnectWithoutExchangeInput.schema';
import { ExchangeCredentialUpsertWithWhereUniqueWithoutExchangeInputObjectSchema as ExchangeCredentialUpsertWithWhereUniqueWithoutExchangeInputObjectSchema } from './ExchangeCredentialUpsertWithWhereUniqueWithoutExchangeInput.schema';
import { ExchangeCredentialCreateManyExchangeInputEnvelopeObjectSchema as ExchangeCredentialCreateManyExchangeInputEnvelopeObjectSchema } from './ExchangeCredentialCreateManyExchangeInputEnvelope.schema';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './ExchangeCredentialWhereUniqueInput.schema';
import { ExchangeCredentialUpdateWithWhereUniqueWithoutExchangeInputObjectSchema as ExchangeCredentialUpdateWithWhereUniqueWithoutExchangeInputObjectSchema } from './ExchangeCredentialUpdateWithWhereUniqueWithoutExchangeInput.schema';
import { ExchangeCredentialUpdateManyWithWhereWithoutExchangeInputObjectSchema as ExchangeCredentialUpdateManyWithWhereWithoutExchangeInputObjectSchema } from './ExchangeCredentialUpdateManyWithWhereWithoutExchangeInput.schema';
import { ExchangeCredentialScalarWhereInputObjectSchema as ExchangeCredentialScalarWhereInputObjectSchema } from './ExchangeCredentialScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeCredentialCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialCreateWithoutExchangeInputObjectSchema).array(), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutExchangeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExchangeCredentialCreateOrConnectWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialCreateOrConnectWithoutExchangeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ExchangeCredentialUpsertWithWhereUniqueWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialUpsertWithWhereUniqueWithoutExchangeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExchangeCredentialCreateManyExchangeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema), z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema), z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema), z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema), z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ExchangeCredentialUpdateWithWhereUniqueWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialUpdateWithWhereUniqueWithoutExchangeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ExchangeCredentialUpdateManyWithWhereWithoutExchangeInputObjectSchema), z.lazy(() => ExchangeCredentialUpdateManyWithWhereWithoutExchangeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema), z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ExchangeCredentialUpdateManyWithoutExchangeNestedInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUpdateManyWithoutExchangeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUpdateManyWithoutExchangeNestedInput>;
export const ExchangeCredentialUpdateManyWithoutExchangeNestedInputObjectZodSchema = makeSchema();
