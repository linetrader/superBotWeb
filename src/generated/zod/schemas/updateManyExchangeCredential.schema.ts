import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCredentialUpdateManyMutationInputObjectSchema as ExchangeCredentialUpdateManyMutationInputObjectSchema } from './objects/ExchangeCredentialUpdateManyMutationInput.schema';
import { ExchangeCredentialWhereInputObjectSchema as ExchangeCredentialWhereInputObjectSchema } from './objects/ExchangeCredentialWhereInput.schema';

export const ExchangeCredentialUpdateManySchema: z.ZodType<Prisma.ExchangeCredentialUpdateManyArgs> = z.object({ data: ExchangeCredentialUpdateManyMutationInputObjectSchema, where: ExchangeCredentialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialUpdateManyArgs>;

export const ExchangeCredentialUpdateManyZodSchema = z.object({ data: ExchangeCredentialUpdateManyMutationInputObjectSchema, where: ExchangeCredentialWhereInputObjectSchema.optional() }).strict();