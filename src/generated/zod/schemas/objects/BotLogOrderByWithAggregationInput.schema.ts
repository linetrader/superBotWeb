import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BotLogCountOrderByAggregateInputObjectSchema as BotLogCountOrderByAggregateInputObjectSchema } from './BotLogCountOrderByAggregateInput.schema';
import { BotLogMaxOrderByAggregateInputObjectSchema as BotLogMaxOrderByAggregateInputObjectSchema } from './BotLogMaxOrderByAggregateInput.schema';
import { BotLogMinOrderByAggregateInputObjectSchema as BotLogMinOrderByAggregateInputObjectSchema } from './BotLogMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  botId: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BotLogCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BotLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BotLogMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BotLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BotLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogOrderByWithAggregationInput>;
export const BotLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
