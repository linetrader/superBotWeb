import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogOrderByWithRelationInputObjectSchema as ApiAuditLogOrderByWithRelationInputObjectSchema } from './objects/ApiAuditLogOrderByWithRelationInput.schema';
import { ApiAuditLogWhereInputObjectSchema as ApiAuditLogWhereInputObjectSchema } from './objects/ApiAuditLogWhereInput.schema';
import { ApiAuditLogWhereUniqueInputObjectSchema as ApiAuditLogWhereUniqueInputObjectSchema } from './objects/ApiAuditLogWhereUniqueInput.schema';
import { ApiAuditLogScalarFieldEnumSchema } from './enums/ApiAuditLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ApiAuditLogFindManySelectSchema: z.ZodType<Prisma.ApiAuditLogSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    path: z.boolean().optional(),
    method: z.boolean().optional(),
    status: z.boolean().optional(),
    ip: z.boolean().optional(),
    ua: z.boolean().optional(),
    payload: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogSelect>;

export const ApiAuditLogFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    path: z.boolean().optional(),
    method: z.boolean().optional(),
    status: z.boolean().optional(),
    ip: z.boolean().optional(),
    ua: z.boolean().optional(),
    payload: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const ApiAuditLogFindManySchema: z.ZodType<Prisma.ApiAuditLogFindManyArgs> = z.object({ select: ApiAuditLogFindManySelectSchema.optional(),  orderBy: z.union([ApiAuditLogOrderByWithRelationInputObjectSchema, ApiAuditLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiAuditLogWhereInputObjectSchema.optional(), cursor: ApiAuditLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ApiAuditLogScalarFieldEnumSchema, ApiAuditLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogFindManyArgs>;

export const ApiAuditLogFindManyZodSchema = z.object({ select: ApiAuditLogFindManySelectSchema.optional(),  orderBy: z.union([ApiAuditLogOrderByWithRelationInputObjectSchema, ApiAuditLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiAuditLogWhereInputObjectSchema.optional(), cursor: ApiAuditLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ApiAuditLogScalarFieldEnumSchema, ApiAuditLogScalarFieldEnumSchema.array()]).optional() }).strict();