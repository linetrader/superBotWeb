import * as z from 'zod';

// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string(),
    name: z.string(),
    passwordHash: z.string(),
    countryCode: z.string().optional().nullable(),
    country: z.unknown().optional().nullable(),
    downlines: z.array(z.unknown()),
    uplines: z.array(z.unknown()),
    info: z.unknown().optional().nullable(),
    wallet: z.unknown().optional().nullable(),
    exchangeCredentials: z.array(z.unknown()),
    strategyConfigs: z.array(z.unknown()),
    tradingBots: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
