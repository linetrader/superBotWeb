import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeIncludeObjectSchema as ReferralEdgeIncludeObjectSchema } from './objects/ReferralEdgeInclude.schema';
import { ReferralEdgeOrderByWithRelationInputObjectSchema as ReferralEdgeOrderByWithRelationInputObjectSchema } from './objects/ReferralEdgeOrderByWithRelationInput.schema';
import { ReferralEdgeWhereInputObjectSchema as ReferralEdgeWhereInputObjectSchema } from './objects/ReferralEdgeWhereInput.schema';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './objects/ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeScalarFieldEnumSchema } from './enums/ReferralEdgeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReferralEdgeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReferralEdgeSelect> = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    parentId: z.boolean().optional(),
    parent: z.boolean().optional(),
    childId: z.boolean().optional(),
    child: z.boolean().optional(),
    position: z.boolean().optional(),
    groupNo: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeSelect>;

export const ReferralEdgeFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    parentId: z.boolean().optional(),
    parent: z.boolean().optional(),
    childId: z.boolean().optional(),
    child: z.boolean().optional(),
    position: z.boolean().optional(),
    groupNo: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ReferralEdgeFindFirstOrThrowSchema: z.ZodType<Prisma.ReferralEdgeFindFirstOrThrowArgs> = z.object({ select: ReferralEdgeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReferralEdgeIncludeObjectSchema.optional()), orderBy: z.union([ReferralEdgeOrderByWithRelationInputObjectSchema, ReferralEdgeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReferralEdgeWhereInputObjectSchema.optional(), cursor: ReferralEdgeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReferralEdgeScalarFieldEnumSchema, ReferralEdgeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeFindFirstOrThrowArgs>;

export const ReferralEdgeFindFirstOrThrowZodSchema = z.object({ select: ReferralEdgeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReferralEdgeIncludeObjectSchema.optional()), orderBy: z.union([ReferralEdgeOrderByWithRelationInputObjectSchema, ReferralEdgeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReferralEdgeWhereInputObjectSchema.optional(), cursor: ReferralEdgeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReferralEdgeScalarFieldEnumSchema, ReferralEdgeScalarFieldEnumSchema.array()]).optional() }).strict();