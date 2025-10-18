import * as z from 'zod';
export const NotificationDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  channel: z.string(),
  target: z.string().optional(),
  payload: z.unknown(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));