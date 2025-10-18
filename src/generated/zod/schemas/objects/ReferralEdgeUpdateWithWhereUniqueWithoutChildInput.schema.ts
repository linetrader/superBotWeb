import * as z from 'zod';
import type { Prisma } from '../../../prisma';
import { ReferralEdgeWhereUniqueInputObjectSchema as ReferralEdgeWhereUniqueInputObjectSchema } from './ReferralEdgeWhereUniqueInput.schema';
import { ReferralEdgeUpdateWithoutChildInputObjectSchema as ReferralEdgeUpdateWithoutChildInputObjectSchema } from './ReferralEdgeUpdateWithoutChildInput.schema';
import { ReferralEdgeUncheckedUpdateWithoutChildInputObjectSchema as ReferralEdgeUncheckedUpdateWithoutChildInputObjectSchema } from './ReferralEdgeUncheckedUpdateWithoutChildInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReferralEdgeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReferralEdgeUpdateWithoutChildInputObjectSchema), z.lazy(() => ReferralEdgeUncheckedUpdateWithoutChildInputObjectSchema)])
}).strict();
export const ReferralEdgeUpdateWithWhereUniqueWithoutChildInputObjectSchema: z.ZodType<Prisma.ReferralEdgeUpdateWithWhereUniqueWithoutChildInput> = makeSchema() as unknown as z.ZodType<Prisma.ReferralEdgeUpdateWithWhereUniqueWithoutChildInput>;
export const ReferralEdgeUpdateWithWhereUniqueWithoutChildInputObjectZodSchema = makeSchema();
