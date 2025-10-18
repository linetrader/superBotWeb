import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoSelectObjectSchema as UserInfoSelectObjectSchema } from './objects/UserInfoSelect.schema';
import { UserInfoCreateManyInputObjectSchema as UserInfoCreateManyInputObjectSchema } from './objects/UserInfoCreateManyInput.schema';

export const UserInfoCreateManyAndReturnSchema: z.ZodType<Prisma.UserInfoCreateManyAndReturnArgs> = z.object({ select: UserInfoSelectObjectSchema.optional(), data: z.union([ UserInfoCreateManyInputObjectSchema, z.array(UserInfoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserInfoCreateManyAndReturnArgs>;

export const UserInfoCreateManyAndReturnZodSchema = z.object({ select: UserInfoSelectObjectSchema.optional(), data: z.union([ UserInfoCreateManyInputObjectSchema, z.array(UserInfoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();