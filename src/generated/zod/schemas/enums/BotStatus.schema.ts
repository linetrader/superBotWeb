import * as z from 'zod';

export const BotStatusSchema = z.enum(['STOPPED', 'STARTING', 'RUNNING', 'STOPPING', 'ERROR'])

export type BotStatus = z.infer<typeof BotStatusSchema>;