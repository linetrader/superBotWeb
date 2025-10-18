import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeCreateWithoutChildInputObjectSchema as ReferralEdgeCreateWithoutChildInputObjectSchema } from './ReferralEdgeCreateWithoutChildInput.schema';
import { ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema as ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema } from './ReferralEdgeUncheckedCreateWithoutChildInput.schema';
import { ReferralEdgeCreateOrConnectWithoutChildInputObjectSchema as ReferralEdgeCreateOrConnectWithoutChildInputObjectSchema } from './ReferralEdgeCreateOrConnectWithoutChildInput.schema';
import { ReferralEdgeCreateManyChildInputEnvelopeObjectSchema as ReferralEdgeCreateManyChildInputEnvelopeObjectSchema } from './ReferralEdgeCreateManyChildInputEnvelope.schema';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './ReferralEdgeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReferralEdgeCreateWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeCreateWithoutChildInputObjectSchema).array(), z.lazy(() => ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReferralEdgeCreateOrConnectWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeCreateOrConnectWithoutChildInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReferralEdgeCreateManyChildInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema), z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReferralEdgeCreateNestedManyWithoutChildInputObjectSchema: z.ZodType<Prisma.ReferralEdgeCreateNestedManyWithoutChildInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeCreateNestedManyWithoutChildInput>;
export const ReferralEdgeCreateNestedManyWithoutChildInputObjectZodSchema = makeSchema();
