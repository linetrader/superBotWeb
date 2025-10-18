import * as z from 'zod';

export const WorkStatusSchema = z.enum(['QUEUED', 'IN_PROGRESS', 'SUCCEEDED', 'FAILED', 'CANCELED'])

export type WorkStatus = z.infer<typeof WorkStatusSchema>;