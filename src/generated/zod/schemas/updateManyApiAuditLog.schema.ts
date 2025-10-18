import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogUpdateManyMutationInputObjectSchema as ApiAuditLogUpdateManyMutationInputObjectSchema } from './objects/ApiAuditLogUpdateManyMutationInput.schema';
import { ApiAuditLogWhereInputObjectSchema as ApiAuditLogWhereInputObjectSchema } from './objects/ApiAuditLogWhereInput.schema';

export const ApiAuditLogUpdateManySchema: z.ZodType<Prisma.ApiAuditLogUpdateManyArgs> = z.object({ data: ApiAuditLogUpdateManyMutationInputObjectSchema, where: ApiAuditLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogUpdateManyArgs>;

export const ApiAuditLogUpdateManyZodSchema = z.object({ data: ApiAuditLogUpdateManyMutationInputObjectSchema, where: ApiAuditLogWhereInputObjectSchema.optional() }).strict();