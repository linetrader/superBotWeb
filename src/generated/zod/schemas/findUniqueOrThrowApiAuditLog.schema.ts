import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogSelectObjectSchema as ApiAuditLogSelectObjectSchema } from './objects/ApiAuditLogSelect.schema';
import { ApiAuditLogWhereUniqueInputObjectSchema as ApiAuditLogWhereUniqueInputObjectSchema } from './objects/ApiAuditLogWhereUniqueInput.schema';

export const ApiAuditLogFindUniqueOrThrowSchema: z.ZodType<Prisma.ApiAuditLogFindUniqueOrThrowArgs> = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  where: ApiAuditLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogFindUniqueOrThrowArgs>;

export const ApiAuditLogFindUniqueOrThrowZodSchema = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  where: ApiAuditLogWhereUniqueInputObjectSchema }).strict();