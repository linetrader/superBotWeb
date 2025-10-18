import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeSelectObjectSchema as ReferralEdgeSelectObjectSchema } from './objects/ReferralEdgeSelect.schema';
import { ReferralEdgeCreateManyInputObjectSchema as ReferralEdgeCreateManyInputObjectSchema } from './objects/ReferralEdgeCreateManyInput.schema';

export const ReferralEdgeCreateManyAndReturnSchema: z.ZodType<Prisma.ReferralEdgeCreateManyAndReturnArgs> = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), data: z.union([ ReferralEdgeCreateManyInputObjectSchema, z.array(ReferralEdgeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeCreateManyAndReturnArgs>;

export const ReferralEdgeCreateManyAndReturnZodSchema = z.object({ select: ReferralEdgeSelectObjectSchema.optional(), data: z.union([ ReferralEdgeCreateManyInputObjectSchema, z.array(ReferralEdgeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();