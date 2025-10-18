import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  referralCode: z.string(),
  level: z.number().int().optional(),
  googleOtpEnabled: z.boolean().optional(),
  googleOtpSecret: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserInfoUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserInfoUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoUncheckedCreateWithoutUserInput>;
export const UserInfoUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
