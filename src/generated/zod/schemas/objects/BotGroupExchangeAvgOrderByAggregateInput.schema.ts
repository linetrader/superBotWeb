import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  allocationBps: SortOrderSchema.optional()
}).strict();
export const BotGroupExchangeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeAvgOrderByAggregateInput>;
export const BotGroupExchangeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
