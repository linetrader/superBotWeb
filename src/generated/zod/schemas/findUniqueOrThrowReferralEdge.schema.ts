import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeSelectObjectSchema as ReferralEdgeSelectObjectSchema } from './objects/ReferralEdgeSelect.schema';
import { ReferralEdgeIncludeObjectSchema as ReferralEdgeIncludeObjectSchema } from './objects/ReferralEdgeInclude.schema';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './objects/ReferralEdgeWhereUniqueInput.schema';

export const ReferralEdgeFindUniqueOrThrowSchema: z.ZodType<Prisma.ReferralEdgeFindUniqueOrThrowArgs> = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), include: ReferralEdgeIncludeObjectSchema.optional(), where: ReferralEdgeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeFindUniqueOrThrowArgs>;

export const ReferralEdgeFindUniqueOrThrowZodSchema = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), include: ReferralEdgeIncludeObjectSchema.optional(), where: ReferralEdgeWhereUniqueInputObjectSchema }).strict();