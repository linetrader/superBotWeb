import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  botId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  status: z.literal(true).optional(),
  dedupeKey: z.literal(true).optional(),
  sqsMessageId: z.literal(true).optional(),
  sqsGroupId: z.literal(true).optional(),
  payload: z.literal(true).optional(),
  attempts: z.literal(true).optional(),
  nextVisibleAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WorkItemCountAggregateInputObjectSchema: z.ZodType<Prisma.WorkItemCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkItemCountAggregateInputType>;
export const WorkItemCountAggregateInputObjectZodSchema = makeSchema();
