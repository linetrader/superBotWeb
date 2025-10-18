import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TradingBotOrderByWithRelationInputObjectSchema as TradingBotOrderByWithRelationInputObjectSchema } from './TradingBotOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  botId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  pid: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  queueJobId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  startedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  stoppedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastHeartbeat: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastError: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  workerTaskArn: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  workerRevision: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  desiredState: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  bot: z.lazy(() => TradingBotOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const BotRuntimeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BotRuntimeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BotRuntimeOrderByWithRelationInput>;
export const BotRuntimeOrderByWithRelationInputObjectZodSchema = makeSchema();
