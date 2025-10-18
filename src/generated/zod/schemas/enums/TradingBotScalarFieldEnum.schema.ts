import * as z from 'zod';

export const TradingBotScalarFieldEnumSchema = z.enum(['id', 'name', 'mode', 'exchangeMarketId', 'singleMarketKind', 'symbol', 'strategyConfigId', 'enabled', 'createdAt', 'updatedAt', 'userId'])

export type TradingBotScalarFieldEnum = z.infer<typeof TradingBotScalarFieldEnumSchema>;