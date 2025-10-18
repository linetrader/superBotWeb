import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogSelectObjectSchema as ApiAuditLogSelectObjectSchema } from './objects/ApiAuditLogSelect.schema';
import { ApiAuditLogUpdateManyMutationInputObjectSchema as ApiAuditLogUpdateManyMutationInputObjectSchema } from './objects/ApiAuditLogUpdateManyMutationInput.schema';
import { ApiAuditLogWhereInputObjectSchema as ApiAuditLogWhereInputObjectSchema } from './objects/ApiAuditLogWhereInput.schema';

export const ApiAuditLogUpdateManyAndReturnSchema: z.ZodType<Prisma.ApiAuditLogUpdateManyAndReturnArgs> = z.object({ select: ApiAuditLogSelectObjectSchema.optional(), data: ApiAuditLogUpdateManyMutationInputObjectSchema, where: ApiAuditLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogUpdateManyAndReturnArgs>;

export const ApiAuditLogUpdateManyAndReturnZodSchema = z.object({ select: ApiAuditLogSelectObjectSchema.optional(), data: ApiAuditLogUpdateManyMutationInputObjectSchema, where: ApiAuditLogWhereInputObjectSchema.optional() }).strict();