import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletIncludeObjectSchema as UserWalletIncludeObjectSchema } from './objects/UserWalletInclude.schema';
import { UserWalletOrderByWithRelationInputObjectSchema as UserWalletOrderByWithRelationInputObjectSchema } from './objects/UserWalletOrderByWithRelationInput.schema';
import { UserWalletWhereInputObjectSchema as UserWalletWhereInputObjectSchema } from './objects/UserWalletWhereInput.schema';
import { UserWalletWhereUniqueInputObjectSchema as UserWalletWhereUniqueInputObjectSchema } from './objects/UserWalletWhereUniqueInput.schema';
import { UserWalletScalarFieldEnumSchema } from './enums/UserWalletScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserWalletFindManySelectSchema: z.ZodType<Prisma.UserWalletSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    depositAddress: z.boolean().optional(),
    withdrawAddress: z.boolean().optional(),
    depositPrivCipher: z.boolean().optional(),
    depositPrivIv: z.boolean().optional(),
    depositPrivTag: z.boolean().optional(),
    depositKeyAlg: z.boolean().optional(),
    depositKeyVersion: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserWalletSelect>;

export const UserWalletFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    depositAddress: z.boolean().optional(),
    withdrawAddress: z.boolean().optional(),
    depositPrivCipher: z.boolean().optional(),
    depositPrivIv: z.boolean().optional(),
    depositPrivTag: z.boolean().optional(),
    depositKeyAlg: z.boolean().optional(),
    depositKeyVersion: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const UserWalletFindManySchema: z.ZodType<Prisma.UserWalletFindManyArgs> = z.object({ select: UserWalletFindManySelectSchema.optional(), include: z.lazy(() => UserWalletIncludeObjectSchema.optional()), orderBy: z.union([UserWalletOrderByWithRelationInputObjectSchema, UserWalletOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWalletWhereInputObjectSchema.optional(), cursor: UserWalletWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserWalletScalarFieldEnumSchema, UserWalletScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserWalletFindManyArgs>;

export const UserWalletFindManyZodSchema = z.object({ select: UserWalletFindManySelectSchema.optional(), include: z.lazy(() => UserWalletIncludeObjectSchema.optional()), orderBy: z.union([UserWalletOrderByWithRelationInputObjectSchema, UserWalletOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWalletWhereInputObjectSchema.optional(), cursor: UserWalletWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserWalletScalarFieldEnumSchema, UserWalletScalarFieldEnumSchema.array()]).optional() }).strict();