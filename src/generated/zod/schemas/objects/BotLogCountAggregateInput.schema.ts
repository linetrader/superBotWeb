import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  botId: z.literal(true).optional(),
  level: z.literal(true).optional(),
  message: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BotLogCountAggregateInputObjectSchema: z.ZodType<Prisma.BotLogCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotLogCountAggregateInputType>;
export const BotLogCountAggregateInputObjectZodSchema = makeSchema();
