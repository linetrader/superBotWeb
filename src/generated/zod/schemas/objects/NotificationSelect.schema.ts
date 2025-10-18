import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  channel: z.boolean().optional(),
  target: z.boolean().optional(),
  payload: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const NotificationSelectObjectSchema: z.ZodType<Prisma.NotificationSelect> = makeSchema() as unknown as z.ZodType<Prisma.NotificationSelect>;
export const NotificationSelectObjectZodSchema = makeSchema();
