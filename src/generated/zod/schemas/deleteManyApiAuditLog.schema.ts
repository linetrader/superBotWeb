import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogWhereInputObjectSchema as ApiAuditLogWhereInputObjectSchema } from './objects/ApiAuditLogWhereInput.schema';

export const ApiAuditLogDeleteManySchema: z.ZodType<Prisma.ApiAuditLogDeleteManyArgs> = z.object({ where: ApiAuditLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogDeleteManyArgs>;

export const ApiAuditLogDeleteManyZodSchema = z.object({ where: ApiAuditLogWhereInputObjectSchema.optional() }).strict();