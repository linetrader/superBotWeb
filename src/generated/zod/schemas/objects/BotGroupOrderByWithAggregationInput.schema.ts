import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BotGroupCountOrderByAggregateInputObjectSchema as BotGroupCountOrderByAggregateInputObjectSchema } from './BotGroupCountOrderByAggregateInput.schema';
import { BotGroupMaxOrderByAggregateInputObjectSchema as BotGroupMaxOrderByAggregateInputObjectSchema } from './BotGroupMaxOrderByAggregateInput.schema';
import { BotGroupMinOrderByAggregateInputObjectSchema as BotGroupMinOrderByAggregateInputObjectSchema } from './BotGroupMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  botId: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => BotGroupCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BotGroupMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BotGroupMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BotGroupOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BotGroupOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupOrderByWithAggregationInput>;
export const BotGroupOrderByWithAggregationInputObjectZodSchema = makeSchema();
