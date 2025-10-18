import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const userwalletwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWalletWhereInputObjectSchema), z.lazy(() => UserWalletWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWalletWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWalletWhereInputObjectSchema), z.lazy(() => UserWalletWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  depositAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  withdrawAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  depositPrivCipher: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  depositPrivIv: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  depositPrivTag: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  depositKeyAlg: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  depositKeyVersion: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const UserWalletWhereInputObjectSchema: z.ZodType<Prisma.UserWalletWhereInput> = userwalletwhereinputSchema as unknown as z.ZodType<Prisma.UserWalletWhereInput>;
export const UserWalletWhereInputObjectZodSchema = userwalletwhereinputSchema;
