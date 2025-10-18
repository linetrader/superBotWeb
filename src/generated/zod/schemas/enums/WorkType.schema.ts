import * as z from 'zod';

export const WorkTypeSchema = z.enum(['START_BOT', 'STOP_BOT', 'TICK', 'REBALANCE'])

export type WorkType = z.infer<typeof WorkTypeSchema>;