import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  depositAddress: z.string().optional().nullable(),
  withdrawAddress: z.string().optional().nullable(),
  depositPrivCipher: z.string().optional().nullable(),
  depositPrivIv: z.string().optional().nullable(),
  depositPrivTag: z.string().optional().nullable(),
  depositKeyAlg: z.string().optional().nullable(),
  depositKeyVersion: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const UserWalletCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserWalletCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletCreateWithoutUserInput>;
export const UserWalletCreateWithoutUserInputObjectZodSchema = makeSchema();
