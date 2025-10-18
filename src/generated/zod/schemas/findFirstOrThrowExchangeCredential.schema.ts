import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ExchangeCredentialIncludeObjectSchema as ExchangeCredentialIncludeObjectSchema } from './objects/ExchangeCredentialInclude.schema';
import { ExchangeCredentialOrderByWithRelationInputObjectSchema as ExchangeCredentialOrderByWithRelationInputObjectSchema } from './objects/ExchangeCredentialOrderByWithRelationInput.schema';
import { ExchangeCredentialWhereInputObjectSchema as ExchangeCredentialWhereInputObjectSchema } from './objects/ExchangeCredentialWhereInput.schema';
import { ExchangeCredentialWhereUniqueInputObjectSchema as ExchangeCredentialWhereUniqueInputObjectSchema } from './objects/ExchangeCredentialWhereUniqueInput.schema';
import { ExchangeCredentialScalarFieldEnumSchema } from './enums/ExchangeCredentialScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ExchangeCredentialFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ExchangeCredentialSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    exchangeId: z.boolean().optional(),
    exchange: z.boolean().optional(),
    apiKeyCipher: z.boolean().optional(),
    apiKeyIv: z.boolean().optional(),
    apiKeyTag: z.boolean().optional(),
    secretCipher: z.boolean().optional(),
    secretIv: z.boolean().optional(),
    secretTag: z.boolean().optional(),
    keyAlg: z.boolean().optional(),
    keyVersion: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialSelect>;

export const ExchangeCredentialFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    exchangeId: z.boolean().optional(),
    exchange: z.boolean().optional(),
    apiKeyCipher: z.boolean().optional(),
    apiKeyIv: z.boolean().optional(),
    apiKeyTag: z.boolean().optional(),
    secretCipher: z.boolean().optional(),
    secretIv: z.boolean().optional(),
    secretTag: z.boolean().optional(),
    keyAlg: z.boolean().optional(),
    keyVersion: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ExchangeCredentialFindFirstOrThrowSchema: z.ZodType<Prisma.ExchangeCredentialFindFirstOrThrowArgs> = z.object({ select: ExchangeCredentialFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ExchangeCredentialIncludeObjectSchema.optional()), orderBy: z.union([ExchangeCredentialOrderByWithRelationInputObjectSchema, ExchangeCredentialOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeCredentialWhereInputObjectSchema.optional(), cursor: ExchangeCredentialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ExchangeCredentialScalarFieldEnumSchema, ExchangeCredentialScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ExchangeCredentialFindFirstOrThrowArgs>;

export const ExchangeCredentialFindFirstOrThrowZodSchema = z.object({ select: ExchangeCredentialFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ExchangeCredentialIncludeObjectSchema.optional()), orderBy: z.union([ExchangeCredentialOrderByWithRelationInputObjectSchema, ExchangeCredentialOrderByWithRelationInputObjectSchema.array()]).optional(), where: ExchangeCredentialWhereInputObjectSchema.optional(), cursor: ExchangeCredentialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ExchangeCredentialScalarFieldEnumSchema, ExchangeCredentialScalarFieldEnumSchema.array()]).optional() }).strict();