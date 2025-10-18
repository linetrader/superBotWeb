import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  level: SortOrderSchema.optional()
}).strict();
export const UserInfoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserInfoSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoSumOrderByAggregateInput>;
export const UserInfoSumOrderByAggregateInputObjectZodSchema = makeSchema();
