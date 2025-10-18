import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const userinfowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserInfoWhereInputObjectSchema), z.lazy(() => UserInfoWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserInfoWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserInfoWhereInputObjectSchema), z.lazy(() => UserInfoWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  referralCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  googleOtpEnabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  googleOtpSecret: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const UserInfoWhereInputObjectSchema: z.ZodType<Prisma.UserInfoWhereInput> = userinfowhereinputSchema as unknown as z.ZodType<Prisma.UserInfoWhereInput>;
export const UserInfoWhereInputObjectZodSchema = userinfowhereinputSchema;
