import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  botId: z.literal(true).optional(),
  level: z.literal(true).optional(),
  message: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const BotLogMinAggregateInputObjectSchema: z.ZodType<Prisma.BotLogMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotLogMinAggregateInputType>;
export const BotLogMinAggregateInputObjectZodSchema = makeSchema();
