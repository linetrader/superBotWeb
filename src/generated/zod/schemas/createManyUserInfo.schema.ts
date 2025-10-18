import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserInfoCreateManyInputObjectSchema as UserInfoCreateManyInputObjectSchema } from './objects/UserInfoCreateManyInput.schema';

export const UserInfoCreateManySchema: z.ZodType<Prisma.UserInfoCreateManyArgs> = z.object({ data: z.union([ UserInfoCreateManyInputObjectSchema, z.array(UserInfoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserInfoCreateManyArgs>;

export const UserInfoCreateManyZodSchema = z.object({ data: z.union([ UserInfoCreateManyInputObjectSchema, z.array(UserInfoCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();