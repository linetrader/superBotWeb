import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { UserCreateNestedOneWithoutInfoInputObjectSchema as UserCreateNestedOneWithoutInfoInputObjectSchema } from './UserCreateNestedOneWithoutInfoInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  referralCode: z.string(),
  level: z.number().int().optional(),
  googleOtpEnabled: z.boolean().optional(),
  googleOtpSecret: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutInfoInputObjectSchema)
}).strict();
export const UserInfoCreateInputObjectSchema: z.ZodType<Prisma.UserInfoCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoCreateInput>;
export const UserInfoCreateInputObjectZodSchema = makeSchema();
