import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { BotStatusSchema } from '../enums/BotStatus.schema';
import { TradingBotCreateNestedOneWithoutBotRuntimeInputObjectSchema as TradingBotCreateNestedOneWithoutBotRuntimeInputObjectSchema } from './TradingBotCreateNestedOneWithoutBotRuntimeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: BotStatusSchema.optional(),
  pid: z.number().int().optional().nullable(),
  queueJobId: z.string().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  stoppedAt: z.coerce.date().optional().nullable(),
  lastHeartbeat: z.coerce.date().optional().nullable(),
  lastError: z.string().optional().nullable(),
  workerTaskArn: z.string().optional().nullable(),
  workerRevision: z.string().optional().nullable(),
  desiredState: BotStatusSchema.optional().nullable(),
  createdAt: z.coerce.date().optional(),
  bot: z.lazy(() => TradingBotCreateNestedOneWithoutBotRuntimeInputObjectSchema)
}).strict();
export const BotRuntimeCreateInputObjectSchema: z.ZodType<Prisma.BotRuntimeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeCreateInput>;
export const BotRuntimeCreateInputObjectZodSchema = makeSchema();
