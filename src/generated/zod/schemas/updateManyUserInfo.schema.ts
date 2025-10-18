import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoUpdateManyMutationInputObjectSchema as UserInfoUpdateManyMutationInputObjectSchema } from './objects/UserInfoUpdateManyMutationInput.schema';
import { UserInfoWhereInputObjectSchema as UserInfoWhereInputObjectSchema } from './objects/UserInfoWhereInput.schema';

export const UserInfoUpdateManySchema: z.ZodType<Prisma.UserInfoUpdateManyArgs> = z.object({ data: UserInfoUpdateManyMutationInputObjectSchema, where: UserInfoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserInfoUpdateManyArgs>;

export const UserInfoUpdateManyZodSchema = z.object({ data: UserInfoUpdateManyMutationInputObjectSchema, where: UserInfoWhereInputObjectSchema.optional() }).strict();