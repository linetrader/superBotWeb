import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoIncludeObjectSchema as UserInfoIncludeObjectSchema } from './objects/UserInfoInclude.schema';
import { UserInfoOrderByWithRelationInputObjectSchema as UserInfoOrderByWithRelationInputObjectSchema } from './objects/UserInfoOrderByWithRelationInput.schema';
import { UserInfoWhereInputObjectSchema as UserInfoWhereInputObjectSchema } from './objects/UserInfoWhereInput.schema';
import { UserInfoWhereUniqueInputObjectSchema as UserInfoWhereUniqueInputObjectSchema } from './objects/UserInfoWhereUniqueInput.schema';
import { UserInfoScalarFieldEnumSchema } from './enums/UserInfoScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserInfoFindManySelectSchema: z.ZodType<Prisma.UserInfoSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    referralCode: z.boolean().optional(),
    level: z.boolean().optional(),
    googleOtpEnabled: z.boolean().optional(),
    googleOtpSecret: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserInfoSelect>;

export const UserInfoFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    referralCode: z.boolean().optional(),
    level: z.boolean().optional(),
    googleOtpEnabled: z.boolean().optional(),
    googleOtpSecret: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const UserInfoFindManySchema: z.ZodType<Prisma.UserInfoFindManyArgs> = z.object({ select: UserInfoFindManySelectSchema.optional(), include: z.lazy(() => UserInfoIncludeObjectSchema.optional()), orderBy: z.union([UserInfoOrderByWithRelationInputObjectSchema, UserInfoOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserInfoWhereInputObjectSchema.optional(), cursor: UserInfoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserInfoScalarFieldEnumSchema, UserInfoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserInfoFindManyArgs>;

export const UserInfoFindManyZodSchema = z.object({ select: UserInfoFindManySelectSchema.optional(), include: z.lazy(() => UserInfoIncludeObjectSchema.optional()), orderBy: z.union([UserInfoOrderByWithRelationInputObjectSchema, UserInfoOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserInfoWhereInputObjectSchema.optional(), cursor: UserInfoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserInfoScalarFieldEnumSchema, UserInfoScalarFieldEnumSchema.array()]).optional() }).strict();