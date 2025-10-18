import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeCreateWithoutParentInputObjectSchema as ReferralEdgeCreateWithoutParentInputObjectSchema } from './ReferralEdgeCreateWithoutParentInput.schema';
import { ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema as ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema } from './ReferralEdgeUncheckedCreateWithoutParentInput.schema';
import { ReferralEdgeCreateOrConnectWithoutParentInputObjectSchema as ReferralEdgeCreateOrConnectWithoutParentInputObjectSchema } from './ReferralEdgeCreateOrConnectWithoutParentInput.schema';
import { ReferralEdgeUpsertWithWhereUniqueWithoutParentInputObjectSchema as ReferralEdgeUpsertWithWhereUniqueWithoutParentInputObjectSchema } from './ReferralEdgeUpsertWithWhereUniqueWithoutParentInput.schema';
import { ReferralEdgeCreateManyParentInputEnvelopeObjectSchema as ReferralEdgeCreateManyParentInputEnvelopeObjectSchema } from './ReferralEdgeCreateManyParentInputEnvelope.schema';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeUpdateWithWhereUniqueWithoutParentInputObjectSchema as ReferralEdgeUpdateWithWhereUniqueWithoutParentInputObjectSchema } from './ReferralEdgeUpdateWithWhereUniqueWithoutParentInput.schema';
import { ReferralEdgeUpdateManyWithWhereWithoutParentInputObjectSchema as ReferralEdgeUpdateManyWithWhereWithoutParentInputObjectSchema } from './ReferralEdgeUpdateManyWithWhereWithoutParentInput.schema';
import { ReferralEdgeScalarWhereInputObjectSchema as ReferralEdgeScalarWhereInputObjectSchema } from './ReferralEdgeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReferralEdgeCreateWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeCreateWithoutParentInputObjectSchema).array(), z.lazy(() => ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReferralEdgeCreateOrConnectWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeCreateOrConnectWithoutParentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReferralEdgeUpsertWithWhereUniqueWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeUpsertWithWhereUniqueWithoutParentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReferralEdgeCreateManyParentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema), z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema), z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema), z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema), z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReferralEdgeUpdateWithWhereUniqueWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeUpdateWithWhereUniqueWithoutParentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReferralEdgeUpdateManyWithWhereWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeUpdateManyWithWhereWithoutParentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema), z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReferralEdgeUpdateManyWithoutParentNestedInputObjectSchema: z.ZodType<Prisma.ReferralEdgeUpdateManyWithoutParentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeUpdateManyWithoutParentNestedInput>;
export const ReferralEdgeUpdateManyWithoutParentNestedInputObjectZodSchema = makeSchema();
