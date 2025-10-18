import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  botId: z.literal(true).optional(),
  key: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BotGroupCountAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupCountAggregateInputType>;
export const BotGroupCountAggregateInputObjectZodSchema = makeSchema();
