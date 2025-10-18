import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogSelectObjectSchema as ApiAuditLogSelectObjectSchema } from './objects/ApiAuditLogSelect.schema';
import { ApiAuditLogWhereUniqueInputObjectSchema as ApiAuditLogWhereUniqueInputObjectSchema } from './objects/ApiAuditLogWhereUniqueInput.schema';

export const ApiAuditLogFindUniqueSchema: z.ZodType<Prisma.ApiAuditLogFindUniqueArgs> = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  where: ApiAuditLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogFindUniqueArgs>;

export const ApiAuditLogFindUniqueZodSchema = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  where: ApiAuditLogWhereUniqueInputObjectSchema }).strict();