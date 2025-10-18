import type { Prisma } from '../../prisma';
import * as z from 'zod';
import { ReferralEdgeCreateManyInputObjectSchema as ReferralEdgeCreateManyInputObjectSchema } from './objects/ReferralEdgeCreateManyInput.schema';

export const ReferralEdgeCreateManySchema: z.ZodType<Prisma.ReferralEdgeCreateManyArgs> = z.object({ data: z.union([ ReferralEdgeCreateManyInputObjectSchema, z.array(ReferralEdgeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReferralEdgeCreateManyArgs>;

export const ReferralEdgeCreateManyZodSchema = z.object({ data: z.union([ ReferralEdgeCreateManyInputObjectSchema, z.array(ReferralEdgeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();