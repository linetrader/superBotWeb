import * as z from 'zod';
import type { Prisma } from '../../../prisma';


const makeSchema = () => z.object({
  status: z.literal(true).optional()
}).strict();
export const ApiAuditLogAvgAggregateInputObjectSchema: z.ZodType<Prisma.ApiAuditLogAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ApiAuditLogAvgAggregateInputType>;
export const ApiAuditLogAvgAggregateInputObjectZodSchema = makeSchema();
