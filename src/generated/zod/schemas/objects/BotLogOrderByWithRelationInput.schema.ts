import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TradingBotOrderByWithRelationInputObjectSchema as TradingBotOrderByWithRelationInputObjectSchema } from './TradingBotOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  botId: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  bot: z.lazy(() => TradingBotOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BotLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BotLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BotLogOrderByWithRelationInput>;
export const BotLogOrderByWithRelationInputObjectZodSchema = makeSchema();
