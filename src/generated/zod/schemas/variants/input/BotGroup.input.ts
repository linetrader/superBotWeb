import * as z from 'zod';

import { GroupKeySchema } from '../../enums/GroupKey.schema';
// prettier-ignore
export const BotGroupInputSchema = z.object({
    id: z.string(),
    botId: z.string(),
    bot: z.unknown(),
    key: GroupKeySchema,
    exchanges: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BotGroupInputType = z.infer<typeof BotGroupInputSchema>;
