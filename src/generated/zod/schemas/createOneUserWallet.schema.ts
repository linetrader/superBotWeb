import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletSelectObjectSchema as UserWalletSelectObjectSchema } from './objects/UserWalletSelect.schema';
import { UserWalletIncludeObjectSchema as UserWalletIncludeObjectSchema } from './objects/UserWalletInclude.schema';
import { UserWalletCreateInputObjectSchema as UserWalletCreateInputObjectSchema } from './objects/UserWalletCreateInput.schema';
import { UserWalletUncheckedCreateInputObjectSchema as UserWalletUncheckedCreateInputObjectSchema } from './objects/UserWalletUncheckedCreateInput.schema';

export const UserWalletCreateOneSchema: z.ZodType<Prisma.UserWalletCreateArgs> = z.object({ select: UserWalletSelectObjectSchema.optional(), include: UserWalletIncludeObjectSchema.optional(), data: z.union([UserWalletCreateInputObjectSchema, UserWalletUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserWalletCreateArgs>;

export const UserWalletCreateOneZodSchema = z.object({ select: UserWalletSelectObjectSchema.optional(), include: UserWalletIncludeObjectSchema.optional(), data: z.union([UserWalletCreateInputObjectSchema, UserWalletUncheckedCreateInputObjectSchema]) }).strict();