import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeSelectObjectSchema as ReferralEdgeSelectObjectSchema } from './objects/ReferralEdgeSelect.schema';
import { ReferralEdgeUpdateManyMutationInputObjectSchema as ReferralEdgeUpdateManyMutationInputObjectSchema } from './objects/ReferralEdgeUpdateManyMutationInput.schema';
import { ReferralEdgeWhereInputObjectSchema as ReferralEdgeWhereInputObjectSchema } from './objects/ReferralEdgeWhereInput.schema';

export const ReferralEdgeUpdateManyAndReturnSchema: z.ZodType<Prisma.ReferralEdgeUpdateManyAndReturnArgs> = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), data: ReferralEdgeUpdateManyMutationInputObjectSchema, where: ReferralEdgeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeUpdateManyAndReturnArgs>;

export const ReferralEdgeUpdateManyAndReturnZodSchema = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), data: ReferralEdgeUpdateManyMutationInputObjectSchema, where: ReferralEdgeWhereInputObjectSchema.optional() }).strict();