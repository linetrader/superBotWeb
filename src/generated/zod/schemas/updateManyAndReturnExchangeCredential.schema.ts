import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCredentialSelectObjectSchema as ExchangeCredentialSelectObjectSchema } from './objects/ExchangeCredentialSelect.schema';
import { ExchangeCredentialUpdateManyMutationInputObjectSchema as ExchangeCredentialUpdateManyMutationInputObjectSchema } from './objects/ExchangeCredentialUpdateManyMutationInput.schema';
import { ExchangeCredentialWhereInputObjectSchema as ExchangeCredentialWhereInputObjectSchema } from './objects/ExchangeCredentialWhereInput.schema';

export const ExchangeCredentialUpdateManyAndReturnSchema: z.ZodType<Prisma.ExchangeCredentialUpdateManyAndReturnArgs> = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), data: ExchangeCredentialUpdateManyMutationInputObjectSchema, where: ExchangeCredentialWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialUpdateManyAndReturnArgs>;

export const ExchangeCredentialUpdateManyAndReturnZodSchema = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), data: ExchangeCredentialUpdateManyMutationInputObjectSchema, where: ExchangeCredentialWhereInputObjectSchema.optional() }).strict();