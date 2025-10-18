import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletSelectObjectSchema as UserWalletSelectObjectSchema } from './objects/UserWalletSelect.schema';
import { UserWalletUpdateManyMutationInputObjectSchema as UserWalletUpdateManyMutationInputObjectSchema } from './objects/UserWalletUpdateManyMutationInput.schema';
import { UserWalletWhereInputObjectSchema as UserWalletWhereInputObjectSchema } from './objects/UserWalletWhereInput.schema';

export const UserWalletUpdateManyAndReturnSchema: z.ZodType<Prisma.UserWalletUpdateManyAndReturnArgs> = z.object({ select: UserWalletSelectObjectSchema.optional(), data: UserWalletUpdateManyMutationInputObjectSchema, where: UserWalletWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserWalletUpdateManyAndReturnArgs>;

export const UserWalletUpdateManyAndReturnZodSchema = z.object({ select: UserWalletSelectObjectSchema.optional(), data: UserWalletUpdateManyMutationInputObjectSchema, where: UserWalletWhereInputObjectSchema.optional() }).strict();