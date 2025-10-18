import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeUpdateManyMutationInputObjectSchema as ReferralEdgeUpdateManyMutationInputObjectSchema } from './objects/ReferralEdgeUpdateManyMutationInput.schema';
import { ReferralEdgeWhereInputObjectSchema as ReferralEdgeWhereInputObjectSchema } from './objects/ReferralEdgeWhereInput.schema';

export const ReferralEdgeUpdateManySchema: z.ZodType<Prisma.ReferralEdgeUpdateManyArgs> = z.object({ data: ReferralEdgeUpdateManyMutationInputObjectSchema, where: ReferralEdgeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeUpdateManyArgs>;

export const ReferralEdgeUpdateManyZodSchema = z.object({ data: ReferralEdgeUpdateManyMutationInputObjectSchema, where: ReferralEdgeWhereInputObjectSchema.optional() }).strict();