import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './ExchangeCredentialWhereUniqueInput.schema';
import { ExchangeCredentialCreateWithoutUserInputObjectSchema as ExchangeCredentialCreateWithoutUserInputObjectSchema } from './ExchangeCredentialCreateWithoutUserInput.schema';
import { ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema as ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema } from './ExchangeCredentialUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ExchangeCredentialCreateWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ExchangeCredentialCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateOrConnectWithoutUserInput>;
export const ExchangeCredentialCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
