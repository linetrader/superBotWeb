import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { TradingBotArgsObjectSchema as TradingBotArgsObjectSchema } from './TradingBotArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  botId: z.boolean().optional(),
  bot: z.union([z.boolean(), z.lazy(() => TradingBotArgsObjectSchema)]).optional(),
  status: z.boolean().optional(),
  pid: z.boolean().optional(),
  queueJobId: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  stoppedAt: z.boolean().optional(),
  lastHeartbeat: z.boolean().optional(),
  lastError: z.boolean().optional(),
  workerTaskArn: z.boolean().optional(),
  workerRevision: z.boolean().optional(),
  desiredState: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const BotRuntimeSelectObjectSchema: z.ZodType<Prisma.BotRuntimeSelect> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeSelect>;
export const BotRuntimeSelectObjectZodSchema = makeSchema();
