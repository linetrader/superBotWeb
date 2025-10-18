import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeSelectObjectSchema as ReferralEdgeSelectObjectSchema } from './objects/ReferralEdgeSelect.schema';
import { ReferralEdgeIncludeObjectSchema as ReferralEdgeIncludeObjectSchema } from './objects/ReferralEdgeInclude.schema';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './objects/ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeCreateInputObjectSchema as ReferralEdgeCreateInputObjectSchema } from './objects/ReferralEdgeCreateInput.schema';
import { ReferralEdgeUncheckedCreateInputObjectSchema as ReferralEdgeUncheckedCreateInputObjectSchema } from './objects/ReferralEdgeUncheckedCreateInput.schema';
import { ReferralEdgeUpdateInputObjectSchema as ReferralEdgeUpdateInputObjectSchema } from './objects/ReferralEdgeUpdateInput.schema';
import { ReferralEdgeUncheckedUpdateInputObjectSchema as ReferralEdgeUncheckedUpdateInputObjectSchema } from './objects/ReferralEdgeUncheckedUpdateInput.schema';

export const ReferralEdgeUpsertOneSchema: z.ZodType<Prisma.ReferralEdgeUpsertArgs> = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), include: ReferralEdgeIncludeObjectSchema.optional(), where: ReferralEdgeWhereUniqueInputObjectSchema, create: z.union([ ReferralEdgeCreateInputObjectSchema, ReferralEdgeUncheckedCreateInputObjectSchema ]), update: z.union([ ReferralEdgeUpdateInputObjectSchema, ReferralEdgeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeUpsertArgs>;

export const ReferralEdgeUpsertOneZodSchema = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), include: ReferralEdgeIncludeObjectSchema.optional(), where: ReferralEdgeWhereUniqueInputObjectSchema, create: z.union([ ReferralEdgeCreateInputObjectSchema, ReferralEdgeUncheckedCreateInputObjectSchema ]), update: z.union([ ReferralEdgeUpdateInputObjectSchema, ReferralEdgeUncheckedUpdateInputObjectSchema ]) }).strict();