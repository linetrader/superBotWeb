import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletSelectObjectSchema as UserWalletSelectObjectSchema } from './objects/UserWalletSelect.schema';
import { UserWalletIncludeObjectSchema as UserWalletIncludeObjectSchema } from './objects/UserWalletInclude.schema';
import { UserWalletWhereUniqueInputObjectSchema as UserWalletWhereUniqueInputObjectSchema } from './objects/UserWalletWhereUniqueInput.schema';

export const UserWalletDeleteOneSchema: z.ZodType<Prisma.UserWalletDeleteArgs> = z.object({ select: UserWalletSelectObjectSchema.optional(), include: UserWalletIncludeObjectSchema.optional(), where: UserWalletWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserWalletDeleteArgs>;

export const UserWalletDeleteOneZodSchema = z.object({ select: UserWalletSelectObjectSchema.optional(), include: UserWalletIncludeObjectSchema.optional(), where: UserWalletWhereUniqueInputObjectSchema }).strict();