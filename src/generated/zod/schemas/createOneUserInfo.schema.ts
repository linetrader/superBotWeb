import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoSelectObjectSchema as UserInfoSelectObjectSchema } from './objects/UserInfoSelect.schema';
import { UserInfoIncludeObjectSchema as UserInfoIncludeObjectSchema } from './objects/UserInfoInclude.schema';
import { UserInfoCreateInputObjectSchema as UserInfoCreateInputObjectSchema } from './objects/UserInfoCreateInput.schema';
import { UserInfoUncheckedCreateInputObjectSchema as UserInfoUncheckedCreateInputObjectSchema } from './objects/UserInfoUncheckedCreateInput.schema';

export const UserInfoCreateOneSchema: z.ZodType<Prisma.UserInfoCreateArgs> = z.object({ select: UserInfoSelectObjectSchema.optional(), include: UserInfoIncludeObjectSchema.optional(), data: z.union([UserInfoCreateInputObjectSchema, UserInfoUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserInfoCreateArgs>;

export const UserInfoCreateOneZodSchema = z.object({ select: UserInfoSelectObjectSchema.optional(), include: UserInfoIncludeObjectSchema.optional(), data: z.union([UserInfoCreateInputObjectSchema, UserInfoUncheckedCreateInputObjectSchema]) }).strict();