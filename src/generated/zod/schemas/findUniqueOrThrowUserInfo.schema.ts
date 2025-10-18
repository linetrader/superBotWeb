import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoSelectObjectSchema as UserInfoSelectObjectSchema } from './objects/UserInfoSelect.schema';
import { UserInfoIncludeObjectSchema as UserInfoIncludeObjectSchema } from './objects/UserInfoInclude.schema';
import { UserInfoWhereUniqueInputObjectSchema as UserInfoWhereUniqueInputObjectSchema } from './objects/UserInfoWhereUniqueInput.schema';

export const UserInfoFindUniqueOrThrowSchema: z.ZodType<Prisma.UserInfoFindUniqueOrThrowArgs> = z.object({ select: UserInfoSelectObjectSchema.optional(), include: UserInfoIncludeObjectSchema.optional(), where: UserInfoWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserInfoFindUniqueOrThrowArgs>;

export const UserInfoFindUniqueOrThrowZodSchema = z.object({ select: UserInfoSelectObjectSchema.optional(), include: UserInfoIncludeObjectSchema.optional(), where: UserInfoWhereUniqueInputObjectSchema }).strict();