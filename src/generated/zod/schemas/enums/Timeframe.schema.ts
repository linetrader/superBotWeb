import * as z from 'zod';

export const TimeframeSchema = z.enum(['T1m', 'T3m', 'T5m', 'T15m', 'T30m', 'T1h', 'T4h', 'T1d'])

export type Timeframe = z.infer<typeof TimeframeSchema>;