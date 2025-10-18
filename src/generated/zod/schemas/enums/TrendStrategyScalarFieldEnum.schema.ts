import * as z from 'zod';

export const TrendStrategyScalarFieldEnumSchema = z.enum(['id', 'strategyConfigId', 'trendRsiUpperPullback', 'trendRsiLowerPullback', 'createdAt', 'updatedAt'])

export type TrendStrategyScalarFieldEnum = z.infer<typeof TrendStrategyScalarFieldEnumSchema>;