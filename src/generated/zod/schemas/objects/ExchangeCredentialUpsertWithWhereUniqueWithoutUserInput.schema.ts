import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './ExchangeCredentialWhereUniqueInput.schema';
import { ExchangeCredentialUpdateWithoutUserInputObjectSchema as ExchangeCredentialUpdateWithoutUserInputObjectSchema } from './ExchangeCredentialUpdateWithoutUserInput.schema';
import { ExchangeCredentialUncheckedUpdateWithoutUserInputObjectSchema as ExchangeCredentialUncheckedUpdateWithoutUserInputObjectSchema } from './ExchangeCredentialUncheckedUpdateWithoutUserInput.schema';
import { ExchangeCredentialCreateWithoutUserInputObjectSchema as ExchangeCredentialCreateWithoutUserInputObjectSchema } from './ExchangeCredentialCreateWithoutUserInput.schema';
import { ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema as ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema } from './ExchangeCredentialUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ExchangeCredentialUpdateWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ExchangeCredentialCreateWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ExchangeCredentialUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUpsertWithWhereUniqueWithoutUserInput>;
export const ExchangeCredentialUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
