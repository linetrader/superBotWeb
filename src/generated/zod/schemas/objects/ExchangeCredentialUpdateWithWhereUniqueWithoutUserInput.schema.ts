import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './ExchangeCredentialWhereUniqueInput.schema';
import { ExchangeCredentialUpdateWithoutUserInputObjectSchema as ExchangeCredentialUpdateWithoutUserInputObjectSchema } from './ExchangeCredentialUpdateWithoutUserInput.schema';
import { ExchangeCredentialUncheckedUpdateWithoutUserInputObjectSchema as ExchangeCredentialUncheckedUpdateWithoutUserInputObjectSchema } from './ExchangeCredentialUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeCredentialWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ExchangeCredentialUpdateWithoutUserInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ExchangeCredentialUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUpdateWithWhereUniqueWithoutUserInput>;
export const ExchangeCredentialUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
