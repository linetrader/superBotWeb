import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  depositKeyVersion: SortOrderSchema.optional()
}).strict();
export const UserWalletAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserWalletAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWalletAvgOrderByAggregateInput>;
export const UserWalletAvgOrderByAggregateInputObjectZodSchema = makeSchema();
