import * as z from 'zod';

// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string(),
    name: z.string(),
    passwordHash: z.string(),
    countryCode: z.string().nullable(),
    country: z.unknown().nullable(),
    downlines: z.array(z.unknown()),
    uplines: z.array(z.unknown()),
    info: z.unknown().nullable(),
    wallet: z.unknown().nullable(),
    exchangeCredentials: z.array(z.unknown()),
    strategyConfigs: z.array(z.unknown()),
    tradingBots: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
