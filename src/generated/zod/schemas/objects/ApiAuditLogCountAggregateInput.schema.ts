import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  path: z.literal(true).optional(),
  method: z.literal(true).optional(),
  status: z.literal(true).optional(),
  ip: z.literal(true).optional(),
  ua: z.literal(true).optional(),
  payload: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ApiAuditLogCountAggregateInputObjectSchema: z.ZodType<Prisma.ApiAuditLogCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ApiAuditLogCountAggregateInputType>;
export const ApiAuditLogCountAggregateInputObjectZodSchema = makeSchema();
