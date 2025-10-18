import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogSelectObjectSchema as ApiAuditLogSelectObjectSchema } from './objects/ApiAuditLogSelect.schema';
import { ApiAuditLogWhereUniqueInputObjectSchema as ApiAuditLogWhereUniqueInputObjectSchema } from './objects/ApiAuditLogWhereUniqueInput.schema';
import { ApiAuditLogCreateInputObjectSchema as ApiAuditLogCreateInputObjectSchema } from './objects/ApiAuditLogCreateInput.schema';
import { ApiAuditLogUncheckedCreateInputObjectSchema as ApiAuditLogUncheckedCreateInputObjectSchema } from './objects/ApiAuditLogUncheckedCreateInput.schema';
import { ApiAuditLogUpdateInputObjectSchema as ApiAuditLogUpdateInputObjectSchema } from './objects/ApiAuditLogUpdateInput.schema';
import { ApiAuditLogUncheckedUpdateInputObjectSchema as ApiAuditLogUncheckedUpdateInputObjectSchema } from './objects/ApiAuditLogUncheckedUpdateInput.schema';

export const ApiAuditLogUpsertOneSchema: z.ZodType<Prisma.ApiAuditLogUpsertArgs> = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  where: ApiAuditLogWhereUniqueInputObjectSchema, create: z.union([ ApiAuditLogCreateInputObjectSchema, ApiAuditLogUncheckedCreateInputObjectSchema ]), update: z.union([ ApiAuditLogUpdateInputObjectSchema, ApiAuditLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogUpsertArgs>;

export const ApiAuditLogUpsertOneZodSchema = z.object({ select: ApiAuditLogSelectObjectSchema.optional(),  where: ApiAuditLogWhereUniqueInputObjectSchema, create: z.union([ ApiAuditLogCreateInputObjectSchema, ApiAuditLogUncheckedCreateInputObjectSchema ]), update: z.union([ ApiAuditLogUpdateInputObjectSchema, ApiAuditLogUncheckedUpdateInputObjectSchema ]) }).strict();