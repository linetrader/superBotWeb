import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeCreateWithoutParentInputObjectSchema as ReferralEdgeCreateWithoutParentInputObjectSchema } from './ReferralEdgeCreateWithoutParentInput.schema';
import { ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema as ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema } from './ReferralEdgeUncheckedCreateWithoutParentInput.schema';
import { ReferralEdgeCreateOrConnectWithoutParentInputObjectSchema as ReferralEdgeCreateOrConnectWithoutParentInputObjectSchema } from './ReferralEdgeCreateOrConnectWithoutParentInput.schema';
import { ReferralEdgeCreateManyParentInputEnvelopeObjectSchema as ReferralEdgeCreateManyParentInputEnvelopeObjectSchema } from './ReferralEdgeCreateManyParentInputEnvelope.schema';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './ReferralEdgeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReferralEdgeCreateWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeCreateWithoutParentInputObjectSchema).array(), z.lazy(() => ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReferralEdgeCreateOrConnectWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeCreateOrConnectWithoutParentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReferralEdgeCreateManyParentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema), z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReferralEdgeCreateNestedManyWithoutParentInputObjectSchema: z.ZodType<Prisma.ReferralEdgeCreateNestedManyWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeCreateNestedManyWithoutParentInput>;
export const ReferralEdgeCreateNestedManyWithoutParentInputObjectZodSchema = makeSchema();
