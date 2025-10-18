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
export const UserInfoCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserInfoCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoCreateWithoutUserInput>;
export const UserInfoCreateWithoutUserInputObjectZodSchema = makeSchema();
