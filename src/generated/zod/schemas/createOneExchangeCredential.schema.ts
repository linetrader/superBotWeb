import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCredentialSelectObjectSchema as ExchangeCredentialSelectObjectSchema } from './objects/ExchangeCredentialSelect.schema';
import { ExchangeCredentialIncludeObjectSchema as ExchangeCredentialIncludeObjectSchema } from './objects/ExchangeCredentialInclude.schema';
import { ExchangeCredentialCreateInputObjectSchema as ExchangeCredentialCreateInputObjectSchema } from './objects/ExchangeCredentialCreateInput.schema';
import { ExchangeCredentialUncheckedCreateInputObjectSchema as ExchangeCredentialUncheckedCreateInputObjectSchema } from './objects/ExchangeCredentialUncheckedCreateInput.schema';

export const ExchangeCredentialCreateOneSchema: z.ZodType<Prisma.ExchangeCredentialCreateArgs> = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), include: ExchangeCredentialIncludeObjectSchema.optional(), data: z.union([ExchangeCredentialCreateInputObjectSchema, ExchangeCredentialUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialCreateArgs>;

export const ExchangeCredentialCreateOneZodSchema = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), include: ExchangeCredentialIncludeObjectSchema.optional(), data: z.union([ExchangeCredentialCreateInputObjectSchema, ExchangeCredentialUncheckedCreateInputObjectSchema]) }).strict();