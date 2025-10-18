import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoWhereInputObjectSchema as UserInfoWhereInputObjectSchema } from './objects/UserInfoWhereInput.schema';

export const UserInfoDeleteManySchema: z.ZodType<Prisma.UserInfoDeleteManyArgs> = z.object({ where: UserInfoWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserInfoDeleteManyArgs>;

export const UserInfoDeleteManyZodSchema = z.object({ where: UserInfoWhereInputObjectSchema.optional() }).strict();