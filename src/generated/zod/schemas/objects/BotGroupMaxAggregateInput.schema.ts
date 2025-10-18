import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  botId: z.literal(true).optional(),
  key: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const BotGroupMaxAggregateInputObjectSchema: z.ZodType<Prisma.BotGroupMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotGroupMaxAggregateInputType>;
export const BotGroupMaxAggregateInputObjectZodSchema = makeSchema();
