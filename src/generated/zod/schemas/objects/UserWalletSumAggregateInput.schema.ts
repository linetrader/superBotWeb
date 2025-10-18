import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  depositKeyVersion: z.literal(true).optional()
}).strict();
export const UserWalletSumAggregateInputObjectSchema: z.ZodType<Prisma.UserWalletSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletSumAggregateInputType>;
export const UserWalletSumAggregateInputObjectZodSchema = makeSchema();
