import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeCreateManyChildInputObjectSchema as ReferralEdgeCreateManyChildInputObjectSchema } from './ReferralEdgeCreateManyChildInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReferralEdgeCreateManyChildInputObjectSchema), z.lazy(() => ReferralEdgeCreateManyChildInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReferralEdgeCreateManyChildInputEnvelopeObjectSchema: z.ZodType<Prisma.ReferralEdgeCreateManyChildInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeCreateManyChildInputEnvelope>;
export const ReferralEdgeCreateManyChildInputEnvelopeObjectZodSchema = makeSchema();
