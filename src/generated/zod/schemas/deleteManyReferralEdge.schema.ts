import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeWhereInputObjectSchema as ReferralEdgeWhereInputObjectSchema } from './objects/ReferralEdgeWhereInput.schema';

export const ReferralEdgeDeleteManySchema: z.ZodType<Prisma.ReferralEdgeDeleteManyArgs> = z.object({ where: ReferralEdgeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeDeleteManyArgs>;

export const ReferralEdgeDeleteManyZodSchema = z.object({ where: ReferralEdgeWhereInputObjectSchema.optional() }).strict();