import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletCreateManyInputObjectSchema as UserWalletCreateManyInputObjectSchema } from './objects/UserWalletCreateManyInput.schema';

export const UserWalletCreateManySchema: z.ZodType<Prisma.UserWalletCreateManyArgs> = z.object({ data: z.union([ UserWalletCreateManyInputObjectSchema, z.array(UserWalletCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserWalletCreateManyArgs>;

export const UserWalletCreateManyZodSchema = z.object({ data: z.union([ UserWalletCreateManyInputObjectSchema, z.array(UserWalletCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();