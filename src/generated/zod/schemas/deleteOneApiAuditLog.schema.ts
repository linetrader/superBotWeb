import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogSelectObjectSchema as ApiAuditLogSelectObjectSchema } from './objects/ApiAuditLogSelect.schema';
import { ApiAuditLogWhereUniqueInputObjectSchema as ApiAuditLogWhereUniqueInputObjectSchema } from './objects/ApiAuditLogWhereUniqueInput.schema';

export const ApiAuditLogDeleteOneSchema: z.ZodType<Prisma.ApiAuditLogDeleteArgs> = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  where: ApiAuditLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogDeleteArgs>;

export const ApiAuditLogDeleteOneZodSchema = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  where: ApiAuditLogWhereUniqueInputObjectSchema }).strict();