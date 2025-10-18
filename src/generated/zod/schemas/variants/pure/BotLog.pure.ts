import * as z from 'zod';

import { LogLevelSchema } from '../../enums/LogLevel.schema';
// prettier-ignore
export const BotLogModelSchema = z.object({
    id: z.string(),
    botId: z.string(),
    bot: z.unknown(),
    level: LogLevelSchema,
    message: z.string(),
    createdAt: z.date()
}).strict();

export type BotLogPureType = z.infer<typeof BotLogModelSchema>;
