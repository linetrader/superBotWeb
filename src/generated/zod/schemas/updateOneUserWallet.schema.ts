import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletSelectObjectSchema as UserWalletSelectObjectSchema } from './objects/UserWalletSelect.schema';
import { UserWalletIncludeObjectSchema as UserWalletIncludeObjectSchema } from './objects/UserWalletInclude.schema';
import { UserWalletUpdateInputObjectSchema as UserWalletUpdateInputObjectSchema } from './objects/UserWalletUpdateInput.schema';
import { UserWalletUncheckedUpdateInputObjectSchema as UserWalletUncheckedUpdateInputObjectSchema } from './objects/UserWalletUncheckedUpdateInput.schema';
import { UserWalletWhereUniqueInputObjectSchema as UserWalletWhereUniqueInputObjectSchema } from './objects/UserWalletWhereUniqueInput.schema';

export const UserWalletUpdateOneSchema: z.ZodType<Prisma.UserWalletUpdateArgs> = z.object({ select: UserWalletSelectObjectSchema.optional(), include: UserWalletIncludeObjectSchema.optional(), data: z.union([UserWalletUpdateInputObjectSchema, UserWalletUncheckedUpdateInputObjectSchema]), where: UserWalletWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserWalletUpdateArgs>;

export const UserWalletUpdateOneZodSchema = z.object({ select: UserWalletSelectObjectSchema.optional(), include: UserWalletIncludeObjectSchema.optional(), data: z.union([UserWalletUpdateInputObjectSchema, UserWalletUncheckedUpdateInputObjectSchema]), where: UserWalletWhereUniqueInputObjectSchema }).strict();