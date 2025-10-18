import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserInfoSelectObjectSchema as UserInfoSelectObjectSchema } from './UserInfoSelect.schema';
import { UserInfoIncludeObjectSchema as UserInfoIncludeObjectSchema } from './UserInfoInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserInfoSelectObjectSchema).optional(),
  include: z.lazy(() => UserInfoIncludeObjectSchema).optional()
}).strict();
export const UserInfoArgsObjectSchema = makeSchema();
export const UserInfoArgsObjectZodSchema = makeSchema();
