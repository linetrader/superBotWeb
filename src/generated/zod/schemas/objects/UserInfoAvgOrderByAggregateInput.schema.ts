import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  level: SortOrderSchema.optional()
}).strict();
export const UserInfoAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserInfoAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserInfoAvgOrderByAggregateInput>;
export const UserInfoAvgOrderByAggregateInputObjectZodSchema = makeSchema();
