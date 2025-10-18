import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialCreateWithoutUserInputObjectSchema as ExchangeCredentialCreateWithoutUserInputObjectSchema } from './ExchangeCredentialCreateWithoutUserInput.schema';
import { ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema as ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema } from './ExchangeCredentialUncheckedCreateWithoutUserInput.schema';
import { ExchangeCredentialCreateOrConnectWithoutUserInputObjectSchema as ExchangeCredentialCreateOrConnectWithoutUserInputObjectSchema } from './ExchangeCredentialCreateOrConnectWithoutUserInput.schema';
import { ExchangeCredentialUpsertWithWhereUniqueWithoutUserInputObjectSchema as ExchangeCredentialUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ExchangeCredentialUpsertWithWhereUniqueWithoutUserInput.schema';
import { ExchangeCredentialCreateManyUserInputEnvelopeObjectSchema as ExchangeCredentialCreateManyUserInputEnvelopeObjectSchema } from './ExchangeCredentialCreateManyUserInputEnvelope.schema';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './ExchangeCredentialWhereUniqueInput.schema';
import { ExchangeCredentialUpdateWithWhereUniqueWithoutUserInputObjectSchema as ExchangeCredentialUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ExchangeCredentialUpdateWithWhereUniqueWithoutUserInput.schema';
import { ExchangeCredentialUpdateManyWithWhereWithoutUserInputObjectSchema as ExchangeCredentialUpdateManyWithWhereWithoutUserInputObjectSchema } from './ExchangeCredentialUpdateManyWithWhereWithoutUserInput.schema';
import { ExchangeCredentialScalarWhereInputObjectSchema as ExchangeCredentialScalarWhereInputObjectSchema } from './ExchangeCredentialScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ExchangeCredentialCreateWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ExchangeCredentialCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ExchangeCredentialUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ExchangeCredentialCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema), z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema), z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema), z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema), z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ExchangeCredentialUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ExchangeCredentialUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema), z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ExchangeCredentialUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUpdateManyWithoutUserNestedInput>;
export const ExchangeCredentialUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
