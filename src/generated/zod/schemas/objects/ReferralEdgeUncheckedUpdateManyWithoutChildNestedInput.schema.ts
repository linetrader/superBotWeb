import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeCreateWithoutChildInputObjectSchema as ReferralEdgeCreateWithoutChildInputObjectSchema } from './ReferralEdgeCreateWithoutChildInput.schema';
import { ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema as ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema } from './ReferralEdgeUncheckedCreateWithoutChildInput.schema';
import { ReferralEdgeCreateOrConnectWithoutChildInputObjectSchema as ReferralEdgeCreateOrConnectWithoutChildInputObjectSchema } from './ReferralEdgeCreateOrConnectWithoutChildInput.schema';
import { ReferralEdgeUpsertWithWhereUniqueWithoutChildInputObjectSchema as ReferralEdgeUpsertWithWhereUniqueWithoutChildInputObjectSchema } from './ReferralEdgeUpsertWithWhereUniqueWithoutChildInput.schema';
import { ReferralEdgeCreateManyChildInputEnvelopeObjectSchema as ReferralEdgeCreateManyChildInputEnvelopeObjectSchema } from './ReferralEdgeCreateManyChildInputEnvelope.schema';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeUpdateWithWhereUniqueWithoutChildInputObjectSchema as ReferralEdgeUpdateWithWhereUniqueWithoutChildInputObjectSchema } from './ReferralEdgeUpdateWithWhereUniqueWithoutChildInput.schema';
import { ReferralEdgeUpdateManyWithWhereWithoutChildInputObjectSchema as ReferralEdgeUpdateManyWithWhereWithoutChildInputObjectSchema } from './ReferralEdgeUpdateManyWithWhereWithoutChildInput.schema';
import { ReferralEdgeScalarWhereInputObjectSchema as ReferralEdgeScalarWhereInputObjectSchema } from './ReferralEdgeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReferralEdgeCreateWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeCreateWithoutChildInputObjectSchema).array(), z.lazy(() => ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReferralEdgeCreateOrConnectWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeCreateOrConnectWithoutChildInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReferralEdgeUpsertWithWhereUniqueWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeUpsertWithWhereUniqueWithoutChildInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReferralEdgeCreateManyChildInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema), z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema), z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema), z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema), z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReferralEdgeUpdateWithWhereUniqueWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeUpdateWithWhereUniqueWithoutChildInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReferralEdgeUpdateManyWithWhereWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeUpdateManyWithWhereWithoutChildInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema), z.lazy(() => ReferralEdgeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReferralEdgeUncheckedUpdateManyWithoutChildNestedInputObjectSchema: z.ZodType<Prisma.ReferralEdgeUncheckedUpdateManyWithoutChildNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeUncheckedUpdateManyWithoutChildNestedInput>;
export const ReferralEdgeUncheckedUpdateManyWithoutChildNestedInputObjectZodSchema = makeSchema();
