import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { UserWalletSelectObjectSchema as UserWalletSelectObjectSchema } from './objects/UserWalletSelect.schema';
import { UserWalletCreateManyInputObjectSchema as UserWalletCreateManyInputObjectSchema } from './objects/UserWalletCreateManyInput.schema';

export const UserWalletCreateManyAndReturnSchema: z.ZodType<Prisma.UserWalletCreateManyAndReturnArgs> = z.object({ select: UserWalletSelectObjectSchema.optional(), data: z.union([ UserWalletCreateManyInputObjectSchema, z.array(UserWalletCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserWalletCreateManyAndReturnArgs>;

export const UserWalletCreateManyAndReturnZodSchema = z.object({ select: UserWalletSelectObjectSchema.optional(), data: z.union([ UserWalletCreateManyInputObjectSchema, z.array(UserWalletCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();