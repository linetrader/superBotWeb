import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeSelectObjectSchema as ReferralEdgeSelectObjectSchema } from './objects/ReferralEdgeSelect.schema';
import { ReferralEdgeIncludeObjectSchema as ReferralEdgeIncludeObjectSchema } from './objects/ReferralEdgeInclude.schema';
import { ReferralEdgeUpdateInputObjectSchema as ReferralEdgeUpdateInputObjectSchema } from './objects/ReferralEdgeUpdateInput.schema';
import { ReferralEdgeUncheckedUpdateInputObjectSchema as ReferralEdgeUncheckedUpdateInputObjectSchema } from './objects/ReferralEdgeUncheckedUpdateInput.schema';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './objects/ReferralEdgeWhereUniqueInput.schema';

export const ReferralEdgeUpdateOneSchema: z.ZodType<Prisma.ReferralEdgeUpdateArgs> = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), include: ReferralEdgeIncludeObjectSchema.optional(), data: z.union([ReferralEdgeUpdateInputObjectSchema, ReferralEdgeUncheckedUpdateInputObjectSchema]), where: ReferralEdgeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeUpdateArgs>;

export const ReferralEdgeUpdateOneZodSchema = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), include: ReferralEdgeIncludeObjectSchema.optional(), data: z.union([ReferralEdgeUpdateInputObjectSchema, ReferralEdgeUncheckedUpdateInputObjectSchema]), where: ReferralEdgeWhereUniqueInputObjectSchema }).strict();