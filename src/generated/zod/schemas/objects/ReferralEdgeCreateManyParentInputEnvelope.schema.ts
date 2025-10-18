import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeCreateManyParentInputObjectSchema as ReferralEdgeCreateManyParentInputObjectSchema } from './ReferralEdgeCreateManyParentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReferralEdgeCreateManyParentInputObjectSchema), z.lazy(() => ReferralEdgeCreateManyParentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReferralEdgeCreateManyParentInputEnvelopeObjectSchema: z.ZodType<Prisma.ReferralEdgeCreateManyParentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeCreateManyParentInputEnvelope>;
export const ReferralEdgeCreateManyParentInputEnvelopeObjectZodSchema = makeSchema();
