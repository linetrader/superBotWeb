import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCredentialSelectObjectSchema as ExchangeCredentialSelectObjectSchema } from './objects/ExchangeCredentialSelect.schema';
import { ExchangeCredentialIncludeObjectSchema as ExchangeCredentialIncludeObjectSchema } from './objects/ExchangeCredentialInclude.schema';
import { ExchangeCredentialUpdateInputObjectSchema as ExchangeCredentialUpdateInputObjectSchema } from './objects/ExchangeCredentialUpdateInput.schema';
import { ExchangeCredentialUncheckedUpdateInputObjectSchema as ExchangeCredentialUncheckedUpdateInputObjectSchema } from './objects/ExchangeCredentialUncheckedUpdateInput.schema';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './objects/ExchangeCredentialWhereUniqueInput.schema';

export const ExchangeCredentialUpdateOneSchema: z.ZodType<Prisma.ExchangeCredentialUpdateArgs> = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), include: ExchangeCredentialIncludeObjectSchema.optional(), data: z.union([ExchangeCredentialUpdateInputObjectSchema, ExchangeCredentialUncheckedUpdateInputObjectSchema]), where: ExchangeCredentialWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialUpdateArgs>;

export const ExchangeCredentialUpdateOneZodSchema = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), include: ExchangeCredentialIncludeObjectSchema.optional(), data: z.union([ExchangeCredentialUpdateInputObjectSchema, ExchangeCredentialUncheckedUpdateInputObjectSchema]), where: ExchangeCredentialWhereUniqueInputObjectSchema }).strict();