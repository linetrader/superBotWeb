import * as z from 'zod';

export const NotifyStatusSchema = z.enum(['PENDING', 'SENT', 'FAILED'])

export type NotifyStatus = z.infer<typeof NotifyStatusSchema>;