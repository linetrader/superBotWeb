import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeUpdateWithoutChildInputObjectSchema as ReferralEdgeUpdateWithoutChildInputObjectSchema } from './ReferralEdgeUpdateWithoutChildInput.schema';
import { ReferralEdgeUncheckedUpdateWithoutChildInputObjectSchema as ReferralEdgeUncheckedUpdateWithoutChildInputObjectSchema } from './ReferralEdgeUncheckedUpdateWithoutChildInput.schema';
import { ReferralEdgeCreateWithoutChildInputObjectSchema as ReferralEdgeCreateWithoutChildInputObjectSchema } from './ReferralEdgeCreateWithoutChildInput.schema';
import { ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema as ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema } from './ReferralEdgeUncheckedCreateWithoutChildInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReferralEdgeUpdateWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedUpdateWithoutChildInputObjectSchema)]),
  create: z.union([z.lazy(() => ReferralEdgeCreateWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedCreateWithoutChildInputObjectSchema)])
}).strict();
export const ReferralEdgeUpsertWithWhereUniqueWithoutChildInputObjectSchema: z.ZodType<Prisma.ReferralEdgeUpsertWithWhereUniqueWithoutChildInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeUpsertWithWhereUniqueWithoutChildInput>;
export const ReferralEdgeUpsertWithWhereUniqueWithoutChildInputObjectZodSchema = makeSchema();
