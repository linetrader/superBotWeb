import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserWalletSelectObjectSchema as UserWalletSelectObjectSchema } from './UserWalletSelect.schema';
import { UserWalletIncludeObjectSchema as UserWalletIncludeObjectSchema } from './UserWalletInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserWalletSelectObjectSchema).optional(),
  include: z.lazy(() => UserWalletIncludeObjectSchema).optional()
}).strict();
export const UserWalletArgsObjectSchema = makeSchema();
export const UserWalletArgsObjectZodSchema = makeSchema();
