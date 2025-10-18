import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletSelectObjectSchema as UserWalletSelectObjectSchema } from './objects/UserWalletSelect.schema';
import { UserWalletIncludeObjectSchema as UserWalletIncludeObjectSchema } from './objects/UserWalletInclude.schema';
import { UserWalletWhereUniqueInputObjectSchema as UserWalletWhereUniqueInputObjectSchema } from './objects/UserWalletWhereUniqueInput.schema';

export const UserWalletFindUniqueOrThrowSchema: z.ZodType<Prisma.UserWalletFindUniqueOrThrowArgs> = z.object({ select: UserWalletSelectObjectSchema.optional(), include: UserWalletIncludeObjectSchema.optional(), where: UserWalletWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserWalletFindUniqueOrThrowArgs>;

export const UserWalletFindUniqueOrThrowZodSchema = z.object({ select: UserWalletSelectObjectSchema.optional(), include: UserWalletIncludeObjectSchema.optional(), where: UserWalletWhereUniqueInputObjectSchema }).strict();