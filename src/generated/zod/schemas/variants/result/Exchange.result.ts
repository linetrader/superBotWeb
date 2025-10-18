import * as z from 'zod';

// prettier-ignore
export const ExchangeResultSchema = z.object({
    id: z.string(),
    code: z.string(),
    name: z.string(),
    active: z.boolean(),
    supportsFutures: z.boolean(),
    markets: z.array(z.unknown()),
    credentials: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ExchangeResultType = z.infer<typeof ExchangeResultSchema>;
