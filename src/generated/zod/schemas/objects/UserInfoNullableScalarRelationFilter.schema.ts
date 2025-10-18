import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserInfoWhereInputObjectSchema as UserInfoWhereInputObjectSchema } from './UserInfoWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UserInfoWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => UserInfoWhereInputObjectSchema).optional().nullable()
}).strict();
export const UserInfoNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserInfoNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoNullableScalarRelationFilter>;
export const UserInfoNullableScalarRelationFilterObjectZodSchema = makeSchema();
