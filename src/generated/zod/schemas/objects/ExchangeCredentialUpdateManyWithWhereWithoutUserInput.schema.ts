import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialScalarWhereInputObjectSchema as ExchangeCredentialScalarWhereInputObjectSchema } from './ExchangeCredentialScalarWhereInput.schema';
import { ExchangeCredentialUpdateManyMutationInputObjectSchema as ExchangeCredentialUpdateManyMutationInputObjectSchema } from './ExchangeCredentialUpdateManyMutationInput.schema';
import { ExchangeCredentialUncheckedUpdateManyWithoutUserInputObjectSchema as ExchangeCredentialUncheckedUpdateManyWithoutUserInputObjectSchema } from './ExchangeCredentialUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ExchangeCredentialUpdateManyMutationInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ExchangeCredentialUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUpdateManyWithWhereWithoutUserInput>;
export const ExchangeCredentialUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
