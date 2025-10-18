import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletUpdateManyMutationInputObjectSchema as UserWalletUpdateManyMutationInputObjectSchema } from './objects/UserWalletUpdateManyMutationInput.schema';
import { UserWalletWhereInputObjectSchema as UserWalletWhereInputObjectSchema } from './objects/UserWalletWhereInput.schema';

export const UserWalletUpdateManySchema: z.ZodType<Prisma.UserWalletUpdateManyArgs> = z.object({ data: UserWalletUpdateManyMutationInputObjectSchema, where: UserWalletWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserWalletUpdateManyArgs>;

export const UserWalletUpdateManyZodSchema = z.object({ data: UserWalletUpdateManyMutationInputObjectSchema, where: UserWalletWhereInputObjectSchema.optional() }).strict();