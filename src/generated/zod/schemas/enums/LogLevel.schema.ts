import * as z from 'zod';

export const LogLevelSchema = z.enum(['DEBUG', 'INFO', 'WARN', 'ERROR'])

export type LogLevel = z.infer<typeof LogLevelSchema>;