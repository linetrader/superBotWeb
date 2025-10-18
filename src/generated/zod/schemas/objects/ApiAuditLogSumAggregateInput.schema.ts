import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  status: z.literal(true).optional()
}).strict();
export const ApiAuditLogSumAggregateInputObjectSchema: z.ZodType<Prisma.ApiAuditLogSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ApiAuditLogSumAggregateInputType>;
export const ApiAuditLogSumAggregateInputObjectZodSchema = makeSchema();
