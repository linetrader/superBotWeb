import * as z from 'zod';

export const BotLogScalarFieldEnumSchema = z.enum(['id', 'botId', 'level', 'message', 'createdAt'])

export type BotLogScalarFieldEnum = z.infer<typeof BotLogScalarFieldEnumSchema>;