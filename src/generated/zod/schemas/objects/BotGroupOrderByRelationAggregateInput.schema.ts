import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BotGroupOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupOrderByRelationAggregateInput>;
export const BotGroupOrderByRelationAggregateInputObjectZodSchema = makeSchema();
