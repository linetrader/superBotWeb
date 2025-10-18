import * as z from 'zod';

export const StrategyConfigScalarFieldEnumSchema = z.enum(['id', 'userId', 'name', 'kind', 'useMartin', 'martinMultiplier', 'defaultSize', 'maxSize', 'targetProfit', 'leverage', 'timeframe', 'enabled', 'rsiLength', 'createdAt', 'updatedAt'])

export type StrategyConfigScalarFieldEnum = z.infer<typeof StrategyConfigScalarFieldEnumSchema>;