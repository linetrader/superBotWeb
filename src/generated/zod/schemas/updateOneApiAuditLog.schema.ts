import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogSelectObjectSchema as ApiAuditLogSelectObjectSchema } from './objects/ApiAuditLogSelect.schema';
import { ApiAuditLogUpdateInputObjectSchema as ApiAuditLogUpdateInputObjectSchema } from './objects/ApiAuditLogUpdateInput.schema';
import { ApiAuditLogUncheckedUpdateInputObjectSchema as ApiAuditLogUncheckedUpdateInputObjectSchema } from './objects/ApiAuditLogUncheckedUpdateInput.schema';
import { ApiAuditLogWhereUniqueInputObjectSchema as ApiAuditLogWhereUniqueInputObjectSchema } from './objects/ApiAuditLogWhereUniqueInput.schema';

export const ApiAuditLogUpdateOneSchema: z.ZodType<Prisma.ApiAuditLogUpdateArgs> = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  data: z.union([ApiAuditLogUpdateInputObjectSchema, ApiAuditLogUncheckedUpdateInputObjectSchema]), where: ApiAuditLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogUpdateArgs>;

export const ApiAuditLogUpdateOneZodSchema = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  data: z.union([ApiAuditLogUpdateInputObjectSchema, ApiAuditLogUncheckedUpdateInputObjectSchema]), where: ApiAuditLogWhereUniqueInputObjectSchema }).strict();