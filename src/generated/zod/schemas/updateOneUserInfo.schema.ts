import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoSelectObjectSchema as UserInfoSelectObjectSchema } from './objects/UserInfoSelect.schema';
import { UserInfoIncludeObjectSchema as UserInfoIncludeObjectSchema } from './objects/UserInfoInclude.schema';
import { UserInfoUpdateInputObjectSchema as UserInfoUpdateInputObjectSchema } from './objects/UserInfoUpdateInput.schema';
import { UserInfoUncheckedUpdateInputObjectSchema as UserInfoUncheckedUpdateInputObjectSchema } from './objects/UserInfoUncheckedUpdateInput.schema';
import { UserInfoWhereUniqueInputObjectSchema as UserInfoWhereUniqueInputObjectSchema } from './objects/UserInfoWhereUniqueInput.schema';

export const UserInfoUpdateOneSchema: z.ZodType<Prisma.UserInfoUpdateArgs> = z.object({ select: UserInfoSelectObjectSchema.optional(), include: UserInfoIncludeObjectSchema.optional(), data: z.union([UserInfoUpdateInputObjectSchema, UserInfoUncheckedUpdateInputObjectSchema]), where: UserInfoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserInfoUpdateArgs>;

export const UserInfoUpdateOneZodSchema = z.object({ select: UserInfoSelectObjectSchema.optional(), include: UserInfoIncludeObjectSchema.optional(), data: z.union([UserInfoUpdateInputObjectSchema, UserInfoUncheckedUpdateInputObjectSchema]), where: UserInfoWhereUniqueInputObjectSchema }).strict();