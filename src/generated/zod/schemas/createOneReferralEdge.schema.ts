import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeSelectObjectSchema as ReferralEdgeSelectObjectSchema } from './objects/ReferralEdgeSelect.schema';
import { ReferralEdgeIncludeObjectSchema as ReferralEdgeIncludeObjectSchema } from './objects/ReferralEdgeInclude.schema';
import { ReferralEdgeCreateInputObjectSchema as ReferralEdgeCreateInputObjectSchema } from './objects/ReferralEdgeCreateInput.schema';
import { ReferralEdgeUncheckedCreateInputObjectSchema as ReferralEdgeUncheckedCreateInputObjectSchema } from './objects/ReferralEdgeUncheckedCreateInput.schema';

export const ReferralEdgeCreateOneSchema: z.ZodType<Prisma.ReferralEdgeCreateArgs> = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), include: ReferralEdgeIncludeObjectSchema.optional(), data: z.union([ReferralEdgeCreateInputObjectSchema, ReferralEdgeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeCreateArgs>;

export const ReferralEdgeCreateOneZodSchema = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), include: ReferralEdgeIncludeObjectSchema.optional(), data: z.union([ReferralEdgeCreateInputObjectSchema, ReferralEdgeUncheckedCreateInputObjectSchema]) }).strict();