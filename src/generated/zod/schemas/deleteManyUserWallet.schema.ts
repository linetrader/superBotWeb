import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletWhereInputObjectSchema as UserWalletWhereInputObjectSchema } from './objects/UserWalletWhereInput.schema';

export const UserWalletDeleteManySchema: z.ZodType<Prisma.UserWalletDeleteManyArgs> = z.object({ where: UserWalletWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserWalletDeleteManyArgs>;

export const UserWalletDeleteManyZodSchema = z.object({ where: UserWalletWhereInputObjectSchema.optional() }).strict();