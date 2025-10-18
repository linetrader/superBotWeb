import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  channel: z.literal(true).optional(),
  target: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const NotificationMaxAggregateInputObjectSchema: z.ZodType<Prisma.NotificationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationMaxAggregateInputType>;
export const NotificationMaxAggregateInputObjectZodSchema = makeSchema();
