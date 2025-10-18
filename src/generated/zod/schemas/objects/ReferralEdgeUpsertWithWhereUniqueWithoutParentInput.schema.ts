import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeUpdateWithoutParentInputObjectSchema as ReferralEdgeUpdateWithoutParentInputObjectSchema } from './ReferralEdgeUpdateWithoutParentInput.schema';
import { ReferralEdgeUncheckedUpdateWithoutParentInputObjectSchema as ReferralEdgeUncheckedUpdateWithoutParentInputObjectSchema } from './ReferralEdgeUncheckedUpdateWithoutParentInput.schema';
import { ReferralEdgeCreateWithoutParentInputObjectSchema as ReferralEdgeCreateWithoutParentInputObjectSchema } from './ReferralEdgeCreateWithoutParentInput.schema';
import { ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema as ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema } from './ReferralEdgeUncheckedCreateWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReferralEdgeUpdateWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedUpdateWithoutParentInputObjectSchema)]),
  create: z.union([z.lazy(() => ReferralEdgeCreateWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedCreateWithoutParentInputObjectSchema)])
}).strict();
export const ReferralEdgeUpsertWithWhereUniqueWithoutParentInputObjectSchema: z.ZodType<Prisma.ReferralEdgeUpsertWithWhereUniqueWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeUpsertWithWhereUniqueWithoutParentInput>;
export const ReferralEdgeUpsertWithWhereUniqueWithoutParentInputObjectZodSchema = makeSchema();
