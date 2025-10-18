import * as z from 'zod';

export const MarketKindSchema = z.enum(['SPOT', 'FUTURES'])

export type MarketKind = z.infer<typeof MarketKindSchema>;