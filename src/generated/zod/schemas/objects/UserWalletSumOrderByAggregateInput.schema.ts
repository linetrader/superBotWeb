import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  depositKeyVersion: SortOrderSchema.optional()
}).strict();
export const UserWalletSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserWalletSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletSumOrderByAggregateInput>;
export const UserWalletSumOrderByAggregateInputObjectZodSchema = makeSchema();
