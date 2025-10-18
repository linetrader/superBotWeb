import * as z from 'zod';

import { NotifyStatusSchema } from '../../enums/NotifyStatus.schema';
// prettier-ignore
export const NotificationResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    channel: z.string(),
    target: z.string().nullable(),
    payload: z.unknown(),
    status: NotifyStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type NotificationResultType = z.infer<typeof NotificationResultSchema>;
