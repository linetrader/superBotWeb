import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  botId: z.literal(true).optional(),
  status: z.literal(true).optional(),
  pid: z.literal(true).optional(),
  queueJobId: z.literal(true).optional(),
  startedAt: z.literal(true).optional(),
  stoppedAt: z.literal(true).optional(),
  lastHeartbeat: z.literal(true).optional(),
  lastError: z.literal(true).optional(),
  workerTaskArn: z.literal(true).optional(),
  workerRevision: z.literal(true).optional(),
  desiredState: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const BotRuntimeCountAggregateInputObjectSchema: z.ZodType<Prisma.BotRuntimeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeCountAggregateInputType>;
export const BotRuntimeCountAggregateInputObjectZodSchema = makeSchema();
