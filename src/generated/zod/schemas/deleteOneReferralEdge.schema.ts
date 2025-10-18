import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeSelectObjectSchema as ReferralEdgeSelectObjectSchema } from './objects/ReferralEdgeSelect.schema';
import { ReferralEdgeIncludeObjectSchema as ReferralEdgeIncludeObjectSchema } from './objects/ReferralEdgeInclude.schema';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './objects/ReferralEdgeWhereUniqueInput.schema';

export const ReferralEdgeDeleteOneSchema: z.ZodType<Prisma.ReferralEdgeDeleteArgs> = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), include: ReferralEdgeIncludeObjectSchema.optional(), where: ReferralEdgeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeDeleteArgs>;

export const ReferralEdgeDeleteOneZodSchema = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), include: ReferralEdgeIncludeObjectSchema.optional(), where: ReferralEdgeWhereUniqueInputObjectSchema }).strict();