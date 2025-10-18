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
export const NotificationMinAggregateInputObjectSchema: z.ZodType<Prisma.NotificationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NotificationMinAggregateInputType>;
export const NotificationMinAggregateInputObjectZodSchema = makeSchema();
