import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  pid: SortOrderSchema.optional()
}).strict();
export const BotRuntimeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BotRuntimeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeAvgOrderByAggregateInput>;
export const BotRuntimeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
