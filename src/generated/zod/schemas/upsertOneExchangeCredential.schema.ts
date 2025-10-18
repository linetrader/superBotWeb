import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCredentialSelectObjectSchema as ExchangeCredentialSelectObjectSchema } from './objects/ExchangeCredentialSelect.schema';
import { ExchangeCredentialIncludeObjectSchema as ExchangeCredentialIncludeObjectSchema } from './objects/ExchangeCredentialInclude.schema';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './objects/ExchangeCredentialWhereUniqueInput.schema';
import { ExchangeCredentialCreateInputObjectSchema as ExchangeCredentialCreateInputObjectSchema } from './objects/ExchangeCredentialCreateInput.schema';
import { ExchangeCredentialUncheckedCreateInputObjectSchema as ExchangeCredentialUncheckedCreateInputObjectSchema } from './objects/ExchangeCredentialUncheckedCreateInput.schema';
import { ExchangeCredentialUpdateInputObjectSchema as ExchangeCredentialUpdateInputObjectSchema } from './objects/ExchangeCredentialUpdateInput.schema';
import { ExchangeCredentialUncheckedUpdateInputObjectSchema as ExchangeCredentialUncheckedUpdateInputObjectSchema } from './objects/ExchangeCredentialUncheckedUpdateInput.schema';

export const ExchangeCredentialUpsertOneSchema: z.ZodType<Prisma.ExchangeCredentialUpsertArgs> = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), include: ExchangeCredentialIncludeObjectSchema.optional(), where: ExchangeCredentialWhereUniqueInputObjectSchema, create: z.union([ ExchangeCredentialCreateInputObjectSchema, ExchangeCredentialUncheckedCreateInputObjectSchema ]), update: z.union([ ExchangeCredentialUpdateInputObjectSchema, ExchangeCredentialUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialUpsertArgs>;

export const ExchangeCredentialUpsertOneZodSchema = z.object({ select: ExchangeCredentialSelectObjectSchema.optional(), include: ExchangeCredentialIncludeObjectSchema.optional(), where: ExchangeCredentialWhereUniqueInputObjectSchema, create: z.union([ ExchangeCredentialCreateInputObjectSchema, ExchangeCredentialUncheckedCreateInputObjectSchema ]), update: z.union([ ExchangeCredentialUpdateInputObjectSchema, ExchangeCredentialUncheckedUpdateInputObjectSchema ]) }).strict();