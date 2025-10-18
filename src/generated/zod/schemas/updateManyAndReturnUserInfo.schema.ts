import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoSelectObjectSchema as UserInfoSelectObjectSchema } from './objects/UserInfoSelect.schema';
import { UserInfoUpdateManyMutationInputObjectSchema as UserInfoUpdateManyMutationInputObjectSchema } from './objects/UserInfoUpdateManyMutationInput.schema';
import { UserInfoWhereInputObjectSchema as UserInfoWhereInputObjectSchema } from './objects/UserInfoWhereInput.schema';

export const UserInfoUpdateManyAndReturnSchema: z.ZodType<Prisma.UserInfoUpdateManyAndReturnArgs> = z.object({ select: UserInfoSelectObjectSchema.optional(), data: UserInfoUpdateManyMutationInputObjectSchema, where: UserInfoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserInfoUpdateManyAndReturnArgs>;

export const UserInfoUpdateManyAndReturnZodSchema = z.object({ select: UserInfoSelectObjectSchema.optional(), data: UserInfoUpdateManyMutationInputObjectSchema, where: UserInfoWhereInputObjectSchema.optional() }).strict();