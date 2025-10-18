import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogSelectObjectSchema as ApiAuditLogSelectObjectSchema } from './objects/ApiAuditLogSelect.schema';
import { ApiAuditLogCreateManyInputObjectSchema as ApiAuditLogCreateManyInputObjectSchema } from './objects/ApiAuditLogCreateManyInput.schema';

export const ApiAuditLogCreateManyAndReturnSchema: z.ZodType<Prisma.ApiAuditLogCreateManyAndReturnArgs> = z.object({ select: ApiAuditLogSelectObjectSchema.optional(), data: z.union([ ApiAuditLogCreateManyInputObjectSchema, z.array(ApiAuditLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogCreateManyAndReturnArgs>;

export const ApiAuditLogCreateManyAndReturnZodSchema = z.object({ select: ApiAuditLogSelectObjectSchema.optional(), data: z.union([ ApiAuditLogCreateManyInputObjectSchema, z.array(ApiAuditLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();