import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoSelectObjectSchema as UserInfoSelectObjectSchema } from './objects/UserInfoSelect.schema';
import { UserInfoIncludeObjectSchema as UserInfoIncludeObjectSchema } from './objects/UserInfoInclude.schema';
import { UserInfoWhereUniqueInputObjectSchema as UserInfoWhereUniqueInputObjectSchema } from './objects/UserInfoWhereUniqueInput.schema';

export const UserInfoFindUniqueSchema: z.ZodType<Prisma.UserInfoFindUniqueArgs> = z.object({ select: UserInfoSelectObjectSchema.optional(), include: UserInfoIncludeObjectSchema.optional(), where: UserInfoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserInfoFindUniqueArgs>;

export const UserInfoFindUniqueZodSchema = z.object({ select: UserInfoSelectObjectSchema.optional(), include: UserInfoIncludeObjectSchema.optional(), where: UserInfoWhereUniqueInputObjectSchema }).strict();