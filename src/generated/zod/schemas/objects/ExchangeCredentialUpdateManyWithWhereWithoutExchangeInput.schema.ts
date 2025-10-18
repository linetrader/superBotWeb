import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ExchangeCredentialScalarWhereInputObjectSchema as ExchangeCredentialScalarWhereInputObjectSchema } from './ExchangeCredentialScalarWhereInput.schema';
import { ExchangeCredentialUpdateManyMutationInputObjectSchema as ExchangeCredentialUpdateManyMutationInputObjectSchema } from './ExchangeCredentialUpdateManyMutationInput.schema';
import { ExchangeCredentialUncheckedUpdateManyWithoutExchangeInputObjectSchema as ExchangeCredentialUncheckedUpdateManyWithoutExchangeInputObjectSchema } from './ExchangeCredentialUncheckedUpdateManyWithoutExchangeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ExchangeCredentialScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ExchangeCredentialUpdateManyMutationInputObjectSchema), z.lazy(() => ExchangeCredentialUncheckedUpdateManyWithoutExchangeInputObjectSchema)])
}).strict();
export const ExchangeCredentialUpdateManyWithWhereWithoutExchangeInputObjectSchema: z.ZodType<Prisma.ExchangeCredentialUpdateManyWithWhereWithoutExchangeInput> = makeSchema() as unknown as z.ZodType<Prisma.ExchangeCredentialUpdateManyWithWhereWithoutExchangeInput>;
export const ExchangeCredentialUpdateManyWithWhereWithoutExchangeInputObjectZodSchema = makeSchema();
