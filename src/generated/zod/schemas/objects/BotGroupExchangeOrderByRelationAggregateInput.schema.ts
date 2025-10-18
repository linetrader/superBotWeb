import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BotGroupExchangeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupExchangeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupExchangeOrderByRelationAggregateInput>;
export const BotGroupExchangeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
