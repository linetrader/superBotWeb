import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const UserWalletIncludeObjectSchema: z.ZodType<Prisma.UserWalletInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletInclude>;
export const UserWalletIncludeObjectZodSchema = makeSchema();
