import * as z from 'zod';

export const StrategyKindSchema = z.enum(['TREND', 'BOX', 'BOTH'])

export type StrategyKind = z.infer<typeof StrategyKindSchema>;