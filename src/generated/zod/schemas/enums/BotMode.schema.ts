import * as z from 'zod';

export const BotModeSchema = z.enum(['SINGLE', 'MULTI'])

export type BotMode = z.infer<typeof BotModeSchema>;