import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogCreateManyInputObjectSchema as ApiAuditLogCreateManyInputObjectSchema } from './objects/ApiAuditLogCreateManyInput.schema';

export const ApiAuditLogCreateManySchema: z.ZodType<Prisma.ApiAuditLogCreateManyArgs> = z.object({ data: z.union([ ApiAuditLogCreateManyInputObjectSchema, z.array(ApiAuditLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogCreateManyArgs>;

export const ApiAuditLogCreateManyZodSchema = z.object({ data: z.union([ ApiAuditLogCreateManyInputObjectSchema, z.array(ApiAuditLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();