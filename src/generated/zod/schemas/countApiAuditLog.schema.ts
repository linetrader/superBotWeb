import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ApiAuditLogOrderByWithRelationInputObjectSchema as ApiAuditLogOrderByWithRelationInputObjectSchema } from './objects/ApiAuditLogOrderByWithRelationInput.schema';
import { ApiAuditLogWhereInputObjectSchema as ApiAuditLogWhereInputObjectSchema } from './objects/ApiAuditLogWhereInput.schema';
import { ApiAuditLogWhereUniqueInputObjectSchema as ApiAuditLogWhereUniqueInputObjectSchema } from './objects/ApiAuditLogWhereUniqueInput.schema';
import { ApiAuditLogCountAggregateInputObjectSchema as ApiAuditLogCountAggregateInputObjectSchema } from './objects/ApiAuditLogCountAggregateInput.schema';

export const ApiAuditLogCountSchema: z.ZodType<Prisma.ApiAuditLogCountArgs> = z.object({ orderBy: z.union([ApiAuditLogOrderByWithRelationInputObjectSchema, ApiAuditLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiAuditLogWhereInputObjectSchema.optional(), cursor: ApiAuditLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ApiAuditLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ApiAuditLogCountArgs>;

export const ApiAuditLogCountZodSchema = z.object({ orderBy: z.union([ApiAuditLogOrderByWithRelationInputObjectSchema, ApiAuditLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiAuditLogWhereInputObjectSchema.optional(), cursor: ApiAuditLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ApiAuditLogCountAggregateInputObjectSchema ]).optional() }).strict();