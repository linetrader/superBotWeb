import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { UserListRelationFilterObjectSchema as UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema'

const countrywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CountryWhereInputObjectSchema), z.lazy(() => CountryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CountryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CountryWhereInputObjectSchema), z.lazy(() => CountryWhereInputObjectSchema).array()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(2)]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional()
}).strict();
export const CountryWhereInputObjectSchema: z.ZodType<Prisma.CountryWhereInput> = countrywhereinputSchema as unknown as z.ZodType<Prisma.CountryWhereInput>;
export const CountryWhereInputObjectZodSchema = countrywhereinputSchema;
