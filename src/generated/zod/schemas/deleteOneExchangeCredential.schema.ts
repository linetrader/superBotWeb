import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCredentialSelectObjectSchema as ExchangeCredentialSelectObjectSchema } from './objects/ExchangeCredentialSelect.schema';
import { ExchangeCredentialIncludeObjectSchema as ExchangeCredentialIncludeObjectSchema } from './objects/ExchangeCredentialInclude.schema';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './objects/ExchangeCredentialWhereUniqueInput.schema';

export const ExchangeCredentialDeleteOneSchema: z.ZodType<Prisma.ExchangeCredentialDeleteArgs> = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), include: ExchangeCredentialIncludeObjectSchema.optional(), where: ExchangeCredentialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialDeleteArgs>;

export const ExchangeCredentialDeleteOneZodSchema = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), include: ExchangeCredentialIncludeObjectSchema.optional(), where: ExchangeCredentialWhereUniqueInputObjectSchema }).strict();