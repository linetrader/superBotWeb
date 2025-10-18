import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeUpdateWithoutParentInputObjectSchema as ReferralEdgeUpdateWithoutParentInputObjectSchema } from './ReferralEdgeUpdateWithoutParentInput.schema';
import { ReferralEdgeUncheckedUpdateWithoutParentInputObjectSchema as ReferralEdgeUncheckedUpdateWithoutParentInputObjectSchema } from './ReferralEdgeUncheckedUpdateWithoutParentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReferralEdgeUpdateWithoutParentInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedUpdateWithoutParentInputObjectSchema)])
}).strict();
export const ReferralEdgeUpdateWithWhereUniqueWithoutParentInputObjectSchema: z.ZodType<Prisma.ReferralEdgeUpdateWithWhereUniqueWithoutParentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeUpdateWithWhereUniqueWithoutParentInput>;
export const ReferralEdgeUpdateWithWhereUniqueWithoutParentInputObjectZodSchema = makeSchema();
