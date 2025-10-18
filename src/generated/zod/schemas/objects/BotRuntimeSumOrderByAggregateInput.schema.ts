import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  pid: SortOrderSchema.optional()
}).strict();
export const BotRuntimeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BotRuntimeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeSumOrderByAggregateInput>;
export const BotRuntimeSumOrderByAggregateInputObjectZodSchema = makeSchema();
