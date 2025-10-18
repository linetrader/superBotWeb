import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  referralCode: z.boolean().optional(),
  level: z.boolean().optional(),
  googleOtpEnabled: z.boolean().optional(),
  googleOtpSecret: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const UserInfoSelectObjectSchema: z.ZodType<Prisma.UserInfoSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoSelect>;
export const UserInfoSelectObjectZodSchema = makeSchema();
