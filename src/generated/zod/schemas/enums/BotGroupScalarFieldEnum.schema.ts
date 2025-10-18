import * as z from 'zod';

export const BotGroupScalarFieldEnumSchema = z.enum(['id', 'botId', 'key', 'createdAt', 'updatedAt'])

export type BotGroupScalarFieldEnum = z.infer<typeof BotGroupScalarFieldEnumSchema>;