import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogSelectObjectSchema as ApiAuditLogSelectObjectSchema } from './objects/ApiAuditLogSelect.schema';
import { ApiAuditLogCreateInputObjectSchema as ApiAuditLogCreateInputObjectSchema } from './objects/ApiAuditLogCreateInput.schema';
import { ApiAuditLogUncheckedCreateInputObjectSchema as ApiAuditLogUncheckedCreateInputObjectSchema } from './objects/ApiAuditLogUncheckedCreateInput.schema';

export const ApiAuditLogCreateOneSchema: z.ZodType<Prisma.ApiAuditLogCreateArgs> = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  data: z.union([ApiAuditLogCreateInputObjectSchema, ApiAuditLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogCreateArgs>;

export const ApiAuditLogCreateOneZodSchema = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  data: z.union([ApiAuditLogCreateInputObjectSchema, ApiAuditLogUncheckedCreateInputObjectSchema]) }).strict();