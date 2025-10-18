import * as z from 'zod';

import { NotifyStatusSchema } from '../../enums/NotifyStatus.schema';
// prettier-ignore
export const NotificationInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    channel: z.string(),
    target: z.string().optional().nullable(),
    payload: z.unknown(),
    status: NotifyStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type NotificationInputType = z.infer<typeof NotificationInputSchema>;
