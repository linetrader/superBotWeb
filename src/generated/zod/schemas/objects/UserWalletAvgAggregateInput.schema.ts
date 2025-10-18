import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  depositKeyVersion: z.literal(true).optional()
}).strict();
export const UserWalletAvgAggregateInputObjectSchema: z.ZodType<Prisma.UserWalletAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletAvgAggregateInputType>;
export const UserWalletAvgAggregateInputObjectZodSchema = makeSchema();
