import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotArgsObjectSchema as TradingBotArgsObjectSchema } from './TradingBotArgs.schema';
import { WorkAttemptFindManySchema as WorkAttemptFindManySchema } from '../findManyWorkAttempt.schema';
import { WorkItemCountOutputTypeArgsObjectSchema as WorkItemCountOutputTypeArgsObjectSchema } from './WorkItemCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  botId: z.boolean().optional(),
  bot: z.union([z.boolean(), z.lazy(() => TradingBotArgsObjectSchema)]).optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  dedupeKey: z.boolean().optional(),
  sqsMessageId: z.boolean().optional(),
  sqsGroupId: z.boolean().optional(),
  payload: z.boolean().optional(),
  attempts: z.boolean().optional(),
  nextVisibleAt: z.boolean().optional(),
  runs: z.union([z.boolean(), z.lazy(() => WorkAttemptFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => WorkItemCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WorkItemSelectObjectSchema: z.ZodType<Prisma.WorkItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemSelect>;
export const WorkItemSelectObjectZodSchema = makeSchema();
