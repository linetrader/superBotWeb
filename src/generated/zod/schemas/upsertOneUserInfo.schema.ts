import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoSelectObjectSchema as UserInfoSelectObjectSchema } from './objects/UserInfoSelect.schema';
import { UserInfoIncludeObjectSchema as UserInfoIncludeObjectSchema } from './objects/UserInfoInclude.schema';
import { UserInfoWhereUniqueInputObjectSchema as UserInfoWhereUniqueInputObjectSchema } from './objects/UserInfoWhereUniqueInput.schema';
import { UserInfoCreateInputObjectSchema as UserInfoCreateInputObjectSchema } from './objects/UserInfoCreateInput.schema';
import { UserInfoUncheckedCreateInputObjectSchema as UserInfoUncheckedCreateInputObjectSchema } from './objects/UserInfoUncheckedCreateInput.schema';
import { UserInfoUpdateInputObjectSchema as UserInfoUpdateInputObjectSchema } from './objects/UserInfoUpdateInput.schema';
import { UserInfoUncheckedUpdateInputObjectSchema as UserInfoUncheckedUpdateInputObjectSchema } from './objects/UserInfoUncheckedUpdateInput.schema';

export const UserInfoUpsertOneSchema: z.ZodType<Prisma.UserInfoUpsertArgs> = z.object({ select: UserInfoSelectObjectSchema.optional(), include: UserInfoIncludeObjectSchema.optional(), where: UserInfoWhereUniqueInputObjectSchema, create: z.union([ UserInfoCreateInputObjectSchema, UserInfoUncheckedCreateInputObjectSchema ]), update: z.union([ UserInfoUpdateInputObjectSchema, UserInfoUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserInfoUpsertArgs>;

export const UserInfoUpsertOneZodSchema = z.object({ select: UserInfoSelectObjectSchema.optional(), include: UserInfoIncludeObjectSchema.optional(), where: UserInfoWhereUniqueInputObjectSchema, create: z.union([ UserInfoCreateInputObjectSchema, UserInfoUncheckedCreateInputObjectSchema ]), update: z.union([ UserInfoUpdateInputObjectSchema, UserInfoUncheckedUpdateInputObjectSchema ]) }).strict();