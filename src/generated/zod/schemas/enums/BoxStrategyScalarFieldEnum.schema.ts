import * as z from 'zod';

export const BoxStrategyScalarFieldEnumSchema = z.enum(['id', 'strategyConfigId', 'lowerTh', 'upperTh', 'boxTouchPct', 'createdAt', 'updatedAt'])

export type BoxStrategyScalarFieldEnum = z.infer<typeof BoxStrategyScalarFieldEnumSchema>;