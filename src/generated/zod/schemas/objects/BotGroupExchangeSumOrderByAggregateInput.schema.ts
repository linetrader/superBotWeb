import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  allocationBps: SortOrderSchema.optional()
}).strict();
export const BotGroupExchangeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeSumOrderByAggregateInput>;
export const BotGroupExchangeSumOrderByAggregateInputObjectZodSchema = makeSchema();
