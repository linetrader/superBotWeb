import * as z from 'zod';

export const BotGroupExchangeScalarFieldEnumSchema = z.enum(['id', 'groupId', 'exchangeMarketId', 'enabled', 'allocationBps', 'createdAt', 'updatedAt'])

export type BotGroupExchangeScalarFieldEnum = z.infer<typeof BotGroupExchangeScalarFieldEnumSchema>;