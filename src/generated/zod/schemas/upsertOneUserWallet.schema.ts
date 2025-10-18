import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletSelectObjectSchema as UserWalletSelectObjectSchema } from './objects/UserWalletSelect.schema';
import { UserWalletIncludeObjectSchema as UserWalletIncludeObjectSchema } from './objects/UserWalletInclude.schema';
import { UserWalletWhereUniqueInputObjectSchema as UserWalletWhereUniqueInputObjectSchema } from './objects/UserWalletWhereUniqueInput.schema';
import { UserWalletCreateInputObjectSchema as UserWalletCreateInputObjectSchema } from './objects/UserWalletCreateInput.schema';
import { UserWalletUncheckedCreateInputObjectSchema as UserWalletUncheckedCreateInputObjectSchema } from './objects/UserWalletUncheckedCreateInput.schema';
import { UserWalletUpdateInputObjectSchema as UserWalletUpdateInputObjectSchema } from './objects/UserWalletUpdateInput.schema';
import { UserWalletUncheckedUpdateInputObjectSchema as UserWalletUncheckedUpdateInputObjectSchema } from './objects/UserWalletUncheckedUpdateInput.schema';

export const UserWalletUpsertOneSchema: z.ZodType<Prisma.UserWalletUpsertArgs> = z.object({ select: UserWalletSelectObjectSchema.optional(), include: UserWalletIncludeObjectSchema.optional(), where: UserWalletWhereUniqueInputObjectSchema, create: z.union([ UserWalletCreateInputObjectSchema, UserWalletUncheckedCreateInputObjectSchema ]), update: z.union([ UserWalletUpdateInputObjectSchema, UserWalletUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserWalletUpsertArgs>;

export const UserWalletUpsertOneZodSchema = z.object({ select: UserWalletSelectObjectSchema.optional(), include: UserWalletIncludeObjectSchema.optional(), where: UserWalletWhereUniqueInputObjectSchema, create: z.union([ UserWalletCreateInputObjectSchema, UserWalletUncheckedCreateInputObjectSchema ]), update: z.union([ UserWalletUpdateInputObjectSchema, UserWalletUncheckedUpdateInputObjectSchema ]) }).strict();