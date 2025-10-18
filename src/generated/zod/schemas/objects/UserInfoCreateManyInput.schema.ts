import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  referralCode: z.string(),
  level: z.number().int().optional(),
  googleOtpEnabled: z.boolean().optional(),
  googleOtpSecret: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserInfoCreateManyInputObjectSchema: z.ZodType<Prisma.UserInfoCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoCreateManyInput>;
export const UserInfoCreateManyInputObjectZodSchema = makeSchema();
