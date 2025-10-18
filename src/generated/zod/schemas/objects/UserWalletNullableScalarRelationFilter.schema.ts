import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWalletWhereInputObjectSchema as UserWalletWhereInputObjectSchema } from './UserWalletWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UserWalletWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => UserWalletWhereInputObjectSchema).optional().nullable()
}).strict();
export const UserWalletNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserWalletNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletNullableScalarRelationFilter>;
export const UserWalletNullableScalarRelationFilterObjectZodSchema = makeSchema();
